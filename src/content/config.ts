import { defineCollection, z } from "astro:content";

const Tag = z.union([
  z.literal("React"),
  z.literal("JavaScript"),
  z.literal("TypeScript"),
  z.literal("Rollup"),
  z.literal("Vite"),
]);

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(Tag),
    publishDate: z.string().transform((str) => new Date(str)),
    updatedDate: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
  }),
});

export const collections = { blog };
