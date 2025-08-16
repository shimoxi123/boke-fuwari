import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.string().transform((str) => {
			// 支持 2025-01-01-13-33-22 格式
			const parts = str.split('-');
			if (parts.length === 6) {
				const [year, month, day, hour, minute, second] = parts;
				return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
			}
			// 兼容其他格式
			return new Date(str);
		}),
		updated: z.string().transform((str) => {
			if (!str) return undefined;
			const parts = str.split('-');
			if (parts.length === 6) {
				const [year, month, day, hour, minute, second] = parts;
				return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
			}
			return new Date(str);
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
			const parts = str.split('-');
			if (parts.length === 6) {
				const [year, month, day, hour, minute, second] = parts;
				return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
			}
			return new Date(str);
		}).optional(),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
		nextPublished: z.string().transform((str) => {
			if (!str) return undefined;
			const parts = str.split('-');
			if (parts.length === 6) {
				const [year, month, day, hour, minute, second] = parts;
				return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second));
			}
			return new Date(str);
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
