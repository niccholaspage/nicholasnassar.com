import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishDate: z.string().transform((str) => new Date(str)),
    updatedDate: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
  }),
});

export const collections = { blog };
