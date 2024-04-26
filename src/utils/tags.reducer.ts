import { getCollection } from "astro:content";
import { getBlogPosts } from "./get-posts";

export async function postTagsList(
  includeDrafts = false
): Promise<Record<string, number>> {
  const posts = await getBlogPosts(includeDrafts);

  return posts.reduce((agg: Record<string, number>, post) => {
    post.data.tags?.forEach((tag: string) => {
      tag = tag.toLowerCase();
      if (!agg[tag]) {
        agg[tag] = 0;
      }
      agg[tag]++;
    });
    return agg;
  }, {});
}

export function eachTag(
  tags: Record<string, number>,
  callback: (tagName: string, count: number) => void
): any {
  return Object.entries(tags).map((tagSet) => callback.call(tags, ...tagSet));
}
