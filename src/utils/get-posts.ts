import { getCollection } from "astro:content";

export function chronoSort(a, b) {
  const aDate = a.data?.updatedDate ?? a.data?.date;
  const bDate = b.data?.updatedDate ?? b.data?.date;
  return bDate < aDate ? -1 : 1;
}

export async function getBlogPosts(includeDrafts = false) {
  return getCollection('blog', ({ data: { draft = false } }) => includeDrafts || !draft);
}
