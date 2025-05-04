import { capitalize } from 'lodash-es';
import { getMergedPosts } from './merged-posts';

export const DEFAULT_CATEGORY = 'News' as const;

export function slugifyCategory(category: string): string {
  return category?.toLowerCase().replace(/\s+/g, '-') ?? slugifyCategory(DEFAULT_CATEGORY);
}

export function unslugifyCategory(category: string): string {
  return capitalize(category?.split('-').join(' ') ?? DEFAULT_CATEGORY);
}

export async function getPostsByCategory(includeDrafts?: boolean) {
  return (await getMergedPosts(includeDrafts)).reduce((acc, post) => {
    const category = slugifyCategory(post.data.category);
    acc[category] = acc[category] || [];
    acc[category].push(post);
    return acc;
  }, {} as Record<string, any[]>);
}
