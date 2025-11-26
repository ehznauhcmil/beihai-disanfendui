import { defineCollection, z } from 'astro:content';

const historyCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    year: z.string(),
    title: z.string(),
    description: z.string(),
    era: z.string(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    imageLayout: z.enum(['row', 'col']).optional().default('col'),
    imageAlign: z.union([z.string(), z.array(z.string())]).optional().default('center'),
  })),
});

export const collections = {
  'history': historyCollection,
};
