import { DEV } from '@data/settings';
import { getCollection, type CollectionKey } from 'astro:content';
import { readingTime } from 'reading-time-estimator';

export async function fetchCollection(
  type: CollectionKey = 'blog',
  includeDrafts = DEV,
) {
  return (
    await getCollection(type, (post: any) => {
      return includeDrafts || !post.data.draft;
    })
  )
    .map((post) => {
      const content = post.rendered?.html ?? post.body ?? '';
      const wpm = 238;
      const codeNums = content.match(/<code/g)?.length ?? 0;
      const wpmMultiplier = codeNums > 0 ? 0.77 : 1;
      const rt = readingTime(content, wpm * wpmMultiplier);
      post.data.readingTime = rt.minutes;

      return post;
    })
    .sort((a: any, b: any) => {
      if (b.data.endDate) {
        return !a.data.endDate ? -1 : b.data.endDate.getTime() - a.data.endDate.getTime();
      }

      if (type === 'works') {
        return b.data.title.localeCompare(a.data.title);
      }

      const dateA = a.data.updatedDate ?? a.data.pubDate;
      const dateB = b.data.updatedDate ?? b.data.pubDate;
      return dateB.getTime() - dateA.getTime();
    });
}
