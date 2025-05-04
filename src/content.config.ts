import { DEV, settings } from '@data/settings';
import { glob } from 'astro/loaders';
import { defineCollection, z, type CollectionEntry, type SchemaContext } from 'astro:content';
import {
  DEFAULT_MAPPINGS,
  githubDiscussionsBlogLoader,
} from 'github-discussions-blog-loader';
import { loadEnv } from 'vite';

const {
  GITHUB_TOKEN,
  OWNER = 'oobleck',
  REPO = 'ssr-blog',
} = loadEnv('production', process.cwd(), '');
const ghLoaderConfigCommon = {
  auth: GITHUB_TOKEN,
  repo: { name: REPO, owner: OWNER },
};

export const BLOG_POST_CATEGORIES = [
  'Dev',
  'News',
  'Tech',
  'TIL',
  'Random',
  'Published',
] as const;

const stringOrNumber = z.string().or(z.number());

/**
 * Generic Image Zod type
 */
export type ZImage = CollectionEntry<'blog'>['data']['images'][0];
const imageSchema = ({ image }: SchemaContext) => z.object({
  featured: z.coerce.boolean().optional().default(false),
  image: image(),
  position: stringOrNumber.optional().default('50% 50%'),
  altText: z.string().optional(),
  description: z.string().optional(),
  creditLabel: z.string().optional(),
  creditUrl: z.string().optional(),
});

const placeholderImages = !DEV ? [] : new Array(4).fill(0).map((unused, ii) => ({
  image: `https://imageplaceholder.net/800x600/555555/ffffff?font=Lato&theme=Calm+Water+${ii}`,
  altText: `Placeholder image ${ii + 1}`,
  creditUrl: 'https://imageplaceholder.net/',
}));

export const ZChangelog = z.object({
  date: z.coerce.date({ description: 'The date of the change/update' }),
  description: z.string({ description: 'A brief description of the change/update' }),
}, { description: 'An item in a list of changes/updates' });

const GalleryType = z.enum(['grid', 'masonry', 'stack', 'carousel']);

const commonProps = {
  title: z.string(),
  description: z.string().optional(),
  draft: z.boolean().optional().default(false),
  readingTime: z.string().optional().default('Less than a minute'),
  level: z.coerce.number().optional(),
  // images: z.array(ZImage).optional().default(DEV ? placeholderImages : []),
  noHero: z.coerce.boolean().optional().default(false),
  galleryType: GalleryType.optional(),
  changelog: z.array(ZChangelog).optional().default([]),
  gh: z
    .boolean({
      description:
        'Added when mapping GH Discussion posts with local content posts, and indicates a post from GH.',
    })
    .optional(),
  type: z.enum(['blog', 'works']).optional(),
};

const blogCommon = {
  ...commonProps,
  author: z.any().optional().default(settings.owner),
  category: z.enum(BLOG_POST_CATEGORIES).or(z.any()).default('News'),
  tags: z.array(z.string()).optional().default([]),
  pubDate: z.coerce.date().default(new Date()),
  updatedDate: z.coerce.date().optional(),
};

export const blog = defineCollection({
  loader: githubDiscussionsBlogLoader({
    ...ghLoaderConfigCommon,
    mappings: { ...DEFAULT_MAPPINGS, blogPostCategory: 'Published' },
  }),
  schema: ({ image }) => z.object({
    ...blogCommon,
    images: z.array(imageSchema({ image })).optional().default([]),
  }),
});

export const blogLocal = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    ...blogCommon,
    images: z.array(imageSchema({ image })).optional().default([]),
  }),
});

export const page = defineCollection({
  loader: glob({ base: './src/content/', pattern: '*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    navLabel: z.string().optional(),
    navIndex: z.number().optional().default(50),
    description: z.string().optional(),
    tagline: z.string().optional(),
    hero: z.optional(imageSchema({ image })),
    level: z.coerce.number().optional(),
    bodyClass: z.string().optional(),
    changelog: z.array(ZChangelog).optional().default([]),
  }),
});

const worksCommon = {
  ...commonProps,
  client: z.string().optional(),
  url: z.string().url().optional(),
  category: z.enum(['personal', 'work', 'music', 'home']).optional().default('personal'),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
  galleryType: GalleryType.optional(),
};
export const worksLocal = defineCollection({
  loader: glob({ base: './src/content/works/', pattern: '*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    ...worksCommon,
    images: z.array(imageSchema({ image })).optional().default([]),
  }),
});
export const works = defineCollection({
  loader: githubDiscussionsBlogLoader({
    ...ghLoaderConfigCommon,
    mappings: { ...DEFAULT_MAPPINGS, blogPostCategory: 'works' },
  }),
  schema: ({ image }) => z.object({
    ...worksCommon,
    images: z.array(imageSchema({ image })).optional().default([]),
  }),
});

export const collections = {
  blog,
  blogLocal,
  page,
  // works,
  worksLocal,
};
