import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        image: z.preprocess((i) => `${import.meta.env.BASE_URL}${i}`, z.string()),
        color: z.string().optional(),
        pinned: z.any().optional(),
    }),
});

export const collections = { posts };
