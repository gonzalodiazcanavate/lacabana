import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      excerpt: z.string(),
      date: z.coerce.date(),
      image: image(),
      imageAlt: z.string(),
      categories: z.array(z.string()),
    }),
});

export const collections = { blog };
