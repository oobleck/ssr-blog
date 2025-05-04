import { chronoSlug } from './chrono-slug';
import { getMergedPosts, type MergedPost } from './merged-posts';

/**
 * @returns a hash of post counts keyed by the slug of either month+year or year.
 */
export async function postsCount(
  level: 'month' | 'year' = 'month',
  includeUpdates = true,
): Promise<Record<string, MergedPost[]>> {
  const posts = await getMergedPosts();
  const datePosts = posts.reduce(
    (acc, post) => {
      const { data: { pubDate, updatedDate } } = post;
      const dates = [pubDate];
      if (includeUpdates && updatedDate) {
        dates.push(updatedDate);
      }

      dates.forEach((date) => {
        const slug = chronoSlug(date, level);
        // acc[slug] = (acc[slug] ?? 0) + 1;
        acc[slug] = [...(acc[slug] ?? []), post]
      });
      return acc;
    },
    {} as Record<string, MergedPost[]>,
  );

  return datePosts;
}

// export const countsByMonth = await postsCount('month');
// export const countsByYear = await postsCount('year');
