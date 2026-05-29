import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    coverImage: image().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
