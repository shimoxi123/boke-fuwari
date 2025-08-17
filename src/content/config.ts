import { defineCollection, z } from "astro:content";

/**
 * 文章集合配置
 * 定义了文章内容的结构和验证规则
 */
const postsCollection = defineCollection({
	schema: z.object({
		// 文章标题
		title: z.string(),
		
		// 发布日期，支持多种格式
		published: z.string().transform((str) => {
			// 支持 2025-01-01-13-33-22 格式（到秒）
			const parts = str.split("-");
			if (parts.length === 6) {
				const [year, month, day, hour, minute, second] = parts;
				const date = new Date(
					parseInt(year),
					parseInt(month) - 1,
					parseInt(day),
					parseInt(hour),
					parseInt(minute),
					parseInt(second),
				);
				// 检查日期是否有效
				if (!isNaN(date.getTime())) {
					return date;
				}
			}
			// 支持 2025-01-01-13-33 格式（到分钟）
			if (parts.length === 5) {
				const [year, month, day, hour, minute] = parts;
				const date = new Date(
					parseInt(year),
					parseInt(month) - 1,
					parseInt(day),
					parseInt(hour),
					parseInt(minute),
				);
				// 检查日期是否有效
				if (!isNaN(date.getTime())) {
					return date;
				}
			}
			// 兼容其他格式
			const date = new Date(str);
			// 检查日期是否有效
			if (!isNaN(date.getTime())) {
				return date;
			}
			// 如果所有方法都失败，返回当前日期
			return new Date();
		}),
		
		// 更新日期，可选字段
		updated: z
			.string()
			.transform((str) => {
				if (!str) return undefined;
				// 支持 2025-01-01-13-33-22 格式（到秒）
				const parts = str.split("-");
				if (parts.length === 6) {
					const [year, month, day, hour, minute, second] = parts;
					const date = new Date(
						parseInt(year),
						parseInt(month) - 1,
						parseInt(day),
						parseInt(hour),
						parseInt(minute),
						parseInt(second),
					);
					// 检查日期是否有效
					if (!isNaN(date.getTime())) {
						return date;
					}
				}
				// 支持 2025-01-01-13-33 格式（到分钟）
				if (parts.length === 5) {
					const [year, month, day, hour, minute] = parts;
					const date = new Date(
						parseInt(year),
						parseInt(month) - 1,
						parseInt(day),
						parseInt(hour),
						parseInt(minute),
					);
					// 检查日期是否有效
					if (!isNaN(date.getTime())) {
						return date;
					}
				}
				// 兼容其他格式
				const date = new Date(str);
				// 检查日期是否有效
				if (!isNaN(date.getTime())) {
					return date;
				}
				// 如果所有方法都失败，返回undefined
				return undefined;
			})
			.optional(),
			
		// 草稿状态，默认为false
		draft: z.boolean().optional().default(false),
		
		// 文章描述，用于SEO和预览
		description: z.string().optional().default(""),
		
		// 文章封面图片路径
		image: z.string().optional().default(""),
		
		// 文章标签数组
		tags: z.array(z.string()).optional().default([]),
		
		// 文章分类
		category: z.string().optional().nullable().default(""),
		
		// 文章语言，默认为空
		lang: z.string().optional().default(""),

		/* 作者信息 */
		author: z
			.object({
				name: z.string(),           // 作者姓名
				avatar: z.string().optional(),  // 作者头像URL
				bio: z.string().optional(),     // 作者简介
				website: z.string().optional(), // 作者网站
				github: z.string().optional(),  // GitHub链接
				email: z.string().optional(),   // 邮箱地址
			})
			.optional(),

		/* 内部使用字段 */
		prevTitle: z.string().default(""),      // 上一篇文章标题
		prevSlug: z.string().default(""),       // 上一篇文章slug
		prevPublished: z                        // 上一篇文章发布日期
			.string()
			.transform((str) => {
				if (!str) return undefined;
				// 支持 2025-01-01-13-33-22 格式（到秒）
				const parts = str.split("-");
				if (parts.length === 6) {
					const [year, month, day, hour, minute, second] = parts;
					const date = new Date(
						parseInt(year),
						parseInt(month) - 1,
						parseInt(day),
						parseInt(hour),
						parseInt(minute),
						parseInt(second),
					);
					// 检查日期是否有效
					if (!isNaN(date.getTime())) {
						return date;
					}
				}
				// 支持 2025-01-01-13-33 格式（到分钟）
				if (parts.length === 5) {
					const [year, month, day, hour, minute] = parts;
					const date = new Date(
						parseInt(year),
						parseInt(month) - 1,
						parseInt(day),
						parseInt(hour),
						parseInt(minute),
					);
					// 检查日期是否有效
					if (!isNaN(date.getTime())) {
						return date;
					}
				}
				// 兼容其他格式
				const date = new Date(str);
				// 检查日期是否有效
				if (!isNaN(date.getTime())) {
					return date;
				}
				// 如果所有方法都失败，返回undefined
				return undefined;
			})
			.optional(),
		nextTitle: z.string().default(""),      // 下一篇文章标题
		nextSlug: z.string().default(""),       // 下一篇文章slug
		nextPublished: z                        // 下一篇文章发布日期
			.string()
			.transform((str) => {
				if (!str) return undefined;
				// 支持 2025-01-01-13-33-22 格式（到秒）
				const parts = str.split("-");
				if (parts.length === 6) {
					const [year, month, day, hour, minute, second] = parts;
					const date = new Date(
						parseInt(year),
						parseInt(month) - 1,
						parseInt(day),
						parseInt(hour),
						parseInt(minute),
						parseInt(second),
					);
					// 检查日期是否有效
					if (!isNaN(date.getTime())) {
						return date;
					}
				}
				// 支持 2025-01-01-13-33 格式（到分钟）
				if (parts.length === 5) {
					const [year, month, day, hour, minute] = parts;
					const date = new Date(
						parseInt(year),
						parseInt(month) - 1,
						parseInt(day),
						parseInt(hour),
						parseInt(minute),
					);
					// 检查日期是否有效
					if (!isNaN(date.getTime())) {
						return date;
					}
				}
				// 兼容其他格式
				const date = new Date(str);
				// 检查日期是否有效
				if (!isNaN(date.getTime())) {
					return date;
				}
				// 如果所有方法都失败，返回undefined
				return undefined;
			})
			.optional(),
	}),
});

/**
 * 规格集合配置
 * 用于存储项目规格说明等文档
 */
const specCollection = defineCollection({
	schema: z.object({}),
});

// 导出所有内容集合
export const collections = {
	posts: postsCollection,
	spec: specCollection,
};
