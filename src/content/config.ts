import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			role: z.string(),
			content: z.array(z.string()),
			author: z.string(),
			avatarSrc: image(),
			avatarAlt: z.string(),
		}),
});
const featureCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			id: z.number(),
			title: z.string(),
			body: z.string(),
			icon: z.string().optional(),
		}),
});
const sliderCollection = defineCollection({
	type: "content",

	schema: ({ image }) =>
		z.object({
			id: z.number(),
			slider: z.string(),
			sliderAlt: z.string(),
		}),
});
const postsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			description: z.string(),
			lastModified: z.string().optional(),
			coverSrc: z.string().optional(),
			coverAlt: z.string(),
			category: z.array(z.string()),
			tags: z.array(z.string()),
			author: z.string(),
		}),
});

const docs = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});
export const collections = {
	blog: blogCollection,
	slider: sliderCollection,
	feature: featureCollection,
	posts: postsCollection,
	docs,
};
