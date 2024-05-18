import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<'blog'>;

export function chronoSort(a: BlogPost, b: BlogPost): number {
  const aDate = new Date(a.data?.updatedDate ?? a.data?.date);
  const bDate = new Date(b.data?.updatedDate ?? b.data?.date);
  return bDate < aDate ? -1 : 1;
}

export async function getBlogPosts(includeDrafts = false): Promise<BlogPost[]> {
  return getCollection('blog', ({ data: { draft = false } }) => includeDrafts || !draft);
}
