import { type CollectionEntry } from 'astro:content';

/**
 * Filters out Posts that are A) drafts, or B) published in the future.
 *
 * @param Post
 * @returns Boolean
 */
export const postsFilter = ({data: {draft, pubDate, updatedDate = pubDate}}: CollectionEntry<'blog'>) => {
  return !draft && new Date(updatedDate) <= new Date();
};