import { getCollection } from "astro:content";

export async function postTagsList(
  includeDrafts = false
): Promise<Record<string, number>> {
  const posts = await getCollection(
    "blog",
    ({ data: { tags = [], draft = false } }) =>
      tags.length && (includeDrafts || !draft)
  );

  return posts.reduce((agg: Record<string, number>, post) => {
    post.data.tags.forEach((tag: string) => {
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
  callback: (tagName, count) => void
): any {
  return Object.entries(tags).map((tagSet) => callback.call(tags, ...tagSet));
}
