import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    date: z.date(),
    updatedDate: z.date().optional(),
    title: z.string(),
    description: z.string(),
    unsplashId: z.string().optional(),
    hero: z.string().optional(),
    heroDescription: z.string().optional(),
    tags: z.string().array().optional(),
    draft: z.boolean().optional(),
    minutesRead: z.string().optional(),
    words: z.number().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
