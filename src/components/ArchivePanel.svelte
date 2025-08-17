<script lang="ts">
import { onMount } from "svelte";

import I18nKey from "../i18n/i18nKey";
import { i18n } from "../i18n/translation";
import { getPostUrlByDate } from "../utils/url-utils";

export let sortedPosts: Post[] = [];

interface Post {
	slug: string;
	data: {
		title: string;
		tags: string[];
		category?: string;
		published: Date | string;
	};
}

interface Group {
	year: number;
	posts: Post[];
}

let groups: Group[] = [];

function formatDate(date: Date | string) {
	let dateObj: Date;
	
	if (typeof date === 'string') {
		// 处理非标准日期格式，如 "2025-08-14-18-00"
		if (date.includes('-') && date.split('-').length > 3) {
			const parts = date.split('-');
			if (parts.length >= 5) {
				// 格式: YYYY-MM-DD-HH-mm
				const year = parseInt(parts[0]);
				const month = parseInt(parts[1]) - 1; // 月份从0开始
				const day = parseInt(parts[2]);
				const hour = parseInt(parts[3]);
				const minute = parseInt(parts[4]);
				dateObj = new Date(year, month, day, hour, minute);
			} else {
				dateObj = new Date(date);
			}
		} else {
			dateObj = new Date(date);
		}
	} else {
		dateObj = date;
	}
	
	// 检查日期是否有效
	if (isNaN(dateObj.getTime())) {
		return "未知日期";
	}
	
	const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
	const day = dateObj.getDate().toString().padStart(2, "0");
	return `${month}-${day}`;
}

function formatTag(tagList: string[]) {
	return tagList.map((t) => `#${t}`).join(" ");
}

// 解析自定义日期格式的函数
function parseCustomDate(dateString: string): Date | null {
	try {
		// 处理非标准日期格式，如 "2025-08-14-18-00"
		if (dateString.includes('-') && dateString.split('-').length > 3) {
			const parts = dateString.split('-');
			if (parts.length >= 5) {
				// 格式: YYYY-MM-DD-HH-mm
				const year = parseInt(parts[0]);
				const month = parseInt(parts[1]) - 1; // 月份从0开始
				const day = parseInt(parts[2]);
				const hour = parseInt(parts[3]);
				const minute = parseInt(parts[4]);
				const date = new Date(year, month, day, hour, minute);
				
				// 检查日期是否有效
				if (!isNaN(date.getTime())) {
					return date;
				}
			}
		}
		
		// 尝试标准日期解析
		const date = new Date(dateString);
		if (!isNaN(date.getTime())) {
			return date;
		}
		
		return null;
	} catch (e) {
		return null;
	}
}

onMount(() => {
	// 获取 URL 参数
	const params = new URLSearchParams(window.location.search);
	const tags = params.has("tag") ? params.getAll("tag") : [];
	const categories = params.has("category") ? params.getAll("category") : [];
	const uncategorized = params.get("uncategorized");
	
	// 过滤文章
	let filteredPosts = sortedPosts;

	if (tags.length > 0) {
		filteredPosts = filteredPosts.filter(
			(post) =>
				Array.isArray(post.data.tags) &&
				post.data.tags.some((tag) => tags.includes(tag)),
		);
	}

	if (categories.length > 0) {
		filteredPosts = filteredPosts.filter(
			(post) => post.data.category && categories.includes(post.data.category),
		);
	}

	if (uncategorized) {
		filteredPosts = filteredPosts.filter((post) => !post.data.category);
	}

	// 按年份分组
	const grouped = filteredPosts.reduce(
		(acc, post) => {
			let dateObj: Date | null = null;
			
			if (typeof post.data.published === 'string') {
				dateObj = parseCustomDate(post.data.published);
			} else {
				dateObj = post.data.published;
			}
			
			// 检查日期是否有效
			if (!dateObj || isNaN(dateObj.getTime())) {
				return acc;
			}
			
			const year = dateObj.getFullYear();
			if (!acc[year]) {
				acc[year] = [];
			}
			acc[year].push(post);
			return acc;
		},
		{} as Record<number, Post[]>,
	);

	// 转换为数组并排序
	const groupedPostsArray = Object.keys(grouped).map((yearStr) => ({
		year: Number.parseInt(yearStr),
		posts: grouped[Number.parseInt(yearStr)],
	}));

	groupedPostsArray.sort((a, b) => b.year - a.year);

	groups = groupedPostsArray;
});
</script>

<div class="card-base px-8 py-6">
    {#if groups.length === 0}
        <div class="text-center py-12">
            <div class="text-6xl mb-4">📚</div>
            <h3 class="text-xl font-bold text-black/70 dark:text-white/70 mb-2">
                暂无文章
            </h3>
            <p class="text-black/50 dark:text-white/50">
                还没有发布任何文章
            </p>
        </div>
    {:else}
        {#each groups as group}
            <div>
                <div class="flex flex-row w-full items-center h-[3.75rem]">
                    <div class="w-[15%] md:w-[10%] transition text-2xl font-bold text-right text-75">
                        {group.year}
                    </div>
                    <div class="w-[15%] md:w-[10%]">
                        <div
                                class="h-3 w-3 bg-none rounded-full outline outline-[var(--primary)] mx-auto
                      -outline-offset-[2px] z-50 outline-3"
                        ></div>
                    </div>
                    <div class="w-[70%] md:w-[80%] transition text-left text-50">
                        {group.posts.length} {i18n(group.posts.length === 1 ? I18nKey.postCount : I18nKey.postsCount)}
                    </div>
                </div>

                {#each group.posts as post}
                    <a
                            href={getPostUrlByDate(post.slug, post.data.published)}
                            aria-label={post.data.title}
                            class="group btn-plain !block h-10 w-full rounded-lg hover:text-[initial]"
                    >
                        <div class="flex flex-row justify-start items-center h-full">
                            <!-- date -->
                            <div class="w-[15%] md:w-[10%] transition text-sm text-right text-50">
                                {formatDate(post.data.published)}
                            </div>

                            <!-- dot and line -->
                            <div class="w-[15%] md:w-[10%] relative dash-line h-full flex items-center">
                                <div
                                        class="transition-all mx-auto w-1 h-1 rounded group-hover:h-5
                           bg-[oklch(0.5_0.05_var(--hue))] group-hover:bg-[var(--primary)]
                           outline outline-4 z-50
                           outline-[var(--card-bg)]
                           group-hover:outline-[var(--btn-plain-bg-hover)]
                           group-active:outline-[var(--btn-plain-bg-active)]"
                                ></div>
                            </div>

                            <!-- post title -->
                            <div
                                    class="w-[70%] md:max-w-[65%] md:w-[65%] text-left font-bold
                         group-hover:translate-x-1 transition-all group-hover:text-[var(--primary)]
                         text-75 pr-8 whitespace-nowrap overflow-ellipsis overflow-hidden"
                            >
                                {post.data.title}
                            </div>

                            <!-- tag list -->
                            <div
                                    class="hidden md:block md:w-[15%] text-left text-sm transition
                         whitespace-nowrap overflow-ellipsis overflow-hidden text-30"
                            >
                                {formatTag(post.data.tags)}
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        {/each}
    {/if}
</div>