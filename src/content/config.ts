import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.string().transform((str) => {
			// 支持 2025-01-01-13-33-22 格式（到秒）
			const parts = str.split('-');
			if (parts.length === 6) {
				const [year, month, day, hour, minute, second] = parts;
				const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
				// 检查日期是否有效
				if (!isNaN(date.getTime())) {
					return date;
				}
			}
			// 支持 2025-01-01-13-33 格式（到分钟）
			if (parts.length === 5) {
				const [year, month, day, hour, minute] = parts;
				const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
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
		updated: z.string().transform((str) => {
			if (!str) return undefined;
			// 支持 2025-01-01-13-33-22 格式（到秒）
			const parts = str.split('-');
			if (parts.length === 6) {
				const [year, month, day, hour, minute, second] = parts;
				const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
				// 检查日期是否有效
				if (!isNaN(date.getTime())) {
					return date;
				}
			}
			// 支持 2025-01-01-13-33 格式（到分钟）
			if (parts.length === 5) {
				const [year, month, day, hour, minute] = parts;
				const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
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
		}).optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),
		
		/* Author information */
		author: z.object({
			name: z.string(),
			avatar: z.string().optional(),
			bio: z.string().optional(),
			website: z.string().optional(),
			github: z.string().optional(),
			email: z.string().optional(),
		}).optional(),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		prevPublished: z.string().transform((str) => {
			if (!str) return undefined;
			// 支持 2025-01-01-13-33-22 格式（到秒）
			const parts = str.split('-');
			if (parts.length === 6) {
				const [year, month, day, hour, minute, second] = parts;
				const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
				// 检查日期是否有效
				if (!isNaN(date.getTime())) {
					return date;
				}
			}
			// 支持 2025-01-01-13-33 格式（到分钟）
			if (parts.length === 5) {
				const [year, month, day, hour, minute] = parts;
				const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
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
		}).optional(),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
		nextPublished: z.string().transform((str) => {
			if (!str) return undefined;
			// 支持 2025-01-01-13-33-22 格式（到秒）
			const parts = str.split('-');
			if (parts.length === 6) {
				const [year, month, day, hour, minute, second] = parts;
				const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
				// 检查日期是否有效
				if (!isNaN(date.getTime())) {
					return date;
				}
			}
			// 支持 2025-01-01-13-33 格式（到分钟）
			if (parts.length === 5) {
				const [year, month, day, hour, minute] = parts;
				const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
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
		}).optional(),
	}),
});
const specCollection = defineCollection({
	schema: z.object({}),
});
export const collections = {
	posts: postsCollection,
	spec: specCollection,
};
