import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            date: z.coerce.date(),
            updated: z.coerce.date().optional(),
            // image: z.preprocess((i) => `${import.meta.env.BASE_URL}${i}`, z.string()),
            image: image(),
            color: z.string().optional(),
            pinned: z.any().optional(),
        }),
});

export const collections = { posts };
