import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
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
		prevPublished: z.date().optional(),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
		nextPublished: z.date().optional(),
	}),
});
const specCollection = defineCollection({
	schema: z.object({}),
});
export const collections = {
	posts: postsCollection,
	spec: specCollection,
};
