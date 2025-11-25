import { defineCollection, z } from 'astro:content';

const highlightsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    category: z.enum(['Training', 'Service', 'Achievement', 'Event', 'Competition']),
    imageSrc: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  highlights: highlightsCollection,
};
