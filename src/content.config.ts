import { file, glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const localized = z.object({ zh: z.string(), en: z.string() });
const localizedList = z.object({ zh: z.array(z.string()), en: z.array(z.string()) });

const education = defineCollection({
  loader: file('./src/data/education.yaml'),
  schema: z.object({
    school: localized,
    badge: z.string().optional(),
    degree: localized,
    major: localized,
    start: z.string(),
    end: z.string(),
    highlights: localizedList.optional(),
  }),
});

const experience = defineCollection({
  loader: file('./src/data/experience.yaml'),
  schema: z.object({
    /** Splits the single YAML file into the two homepage sections. */
    kind: z.enum(['internship', 'work']),
    company: localized,
    role: localized,
    location: localized.optional(),
    start: z.string(),
    /** Empty string renders as "present". */
    end: z.string(),
    highlights: localizedList.optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['zh', 'en']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Shared id across zh/en versions so the language switch can jump to the translation. */
    translationKey: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: file('./src/data/publications.yaml'),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['conference', 'journal', 'preprint', 'patent']),
    note: localized.optional(),
    featured: z.boolean().default(false),
    /** Renders a "sample data" badge so seeded rows are never mistaken for real ones. */
    placeholder: z.boolean().default(false),
    links: z
      .object({
        pdf: z.string().optional(),
        code: z.string().optional(),
        project: z.string().optional(),
        doi: z.string().optional(),
        bibtex: z.string().optional(),
      })
      .default({}),
  }),
});

const projects = defineCollection({
  loader: file('./src/data/projects.yaml'),
  schema: z.object({
    name: z.string(),
    description: localized,
    tags: z.array(z.string()).default([]),
    year: z.number().optional(),
    stars: z.number().optional(),
    featured: z.boolean().default(false),
    placeholder: z.boolean().default(false),
    links: z
      .object({
        repo: z.string().optional(),
        demo: z.string().optional(),
        paper: z.string().optional(),
      })
      .default({}),
  }),
});

export const collections = { blog, publications, projects, education, experience };
