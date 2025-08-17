import { type CollectionEntry, getCollection } from "astro:content";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { getCategoryUrl } from "@utils/url-utils.ts";

// 解析自定义日期格式的函数
function parseCustomDate(dateString: string): Date {
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
    
    // 如果所有方法都失败，返回当前日期
    return new Date();
  } catch (e) {
    // 如果出现任何错误，返回当前日期
    return new Date();
  }
}

// 获取文章并按发布日期排序
async function getRawSortedPosts() {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const sorted = allBlogPosts.sort((a, b) => {
		let dateA: Date;
		let dateB: Date;
		
		// 处理文章a的日期
		if (typeof a.data.published === 'string') {
			dateA = parseCustomDate(a.data.published);
		} else {
			dateA = a.data.published;
		}
		
		// 处理文章b的日期
		if (typeof b.data.published === 'string') {
			dateB = parseCustomDate(b.data.published);
		} else {
			dateB = b.data.published;
		}
		
		return dateA > dateB ? -1 : 1;
	});
	return sorted;
}

export async function getSortedPosts() {
	const sorted = await getRawSortedPosts();

	// prev = 上一篇 = 更旧的文章 = sorted[i + 1]
	// next = 下一篇 = 更新的文章 = sorted[i - 1]
	for (let i = 1; i < sorted.length; i++) {
		sorted[i].data.nextSlug = sorted[i - 1].slug;
		sorted[i].data.nextTitle = sorted[i - 1].data.title;
		sorted[i].data.nextPublished = sorted[i - 1].data.published;
	}
	for (let i = 0; i < sorted.length - 1; i++) {
		sorted[i].data.prevSlug = sorted[i + 1].slug;
		sorted[i].data.prevTitle = sorted[i + 1].data.title;
		sorted[i].data.prevPublished = sorted[i + 1].data.published;
	}

	return sorted;
}
export type PostForList = {
	slug: string;
	data: CollectionEntry<"posts">["data"];
};
export async function getSortedPostsList(): Promise<PostForList[]> {
	const sortedFullPosts = await getRawSortedPosts();

	// 删除文章内容
	const sortedPostsList = sortedFullPosts.map((post) => ({
		slug: post.slug,
		data: post.data,
	}));

	return sortedPostsList;
}
export type Tag = {
	name: string;
	count: number;
};

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const countMap: { [key: string]: number } = {};
	allBlogPosts.map((post: { data: { tags: string[] } }) => {
		post.data.tags.map((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	// 排序标签
	const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
	name: string;
	count: number;
	url: string;
};

export async function getCategoryList(): Promise<Category[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.map((post: { data: { category: string | null } }) => {
		if (!post.data.category) {
			const ucKey = i18n(I18nKey.uncategorized);
			count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
			return;
		}

		const categoryName =
			typeof post.data.category === "string"
				? post.data.category.trim()
				: String(post.data.category).trim();

		count[categoryName] = count[categoryName] ? count[categoryName] + 1 : 1;
	});

	const lst = Object.keys(count).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	const ret: Category[] = [];
	for (const c of lst) {
		ret.push({
			name: c,
			count: count[c],
			url: getCategoryUrl(c),
		});
	}
	return ret;
}
