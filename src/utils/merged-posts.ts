import type { CollectionEntry, CollectionKey } from "astro:content";
import { DEV } from 'data/settings';
import { fetchCollection } from "./get-collection";

export type MergedPost = CollectionEntry<"blog"> | CollectionEntry<"blogLocal">;
export type MergedProject = CollectionEntry<"works"> | CollectionEntry<"worksLocal">;
export type AllPosts = CollectionEntry<CollectionKey>;

const BlendMap = new Map<string, CollectionKey[]>([
  ['blog', ['blog', 'blogLocal']],
  ['works', ['works', 'worksLocal']],
]);

export async function getMergedPosts(drafts = DEV, type: CollectionKey = 'blog'): Promise<AllPosts[]> {
  const map = BlendMap.get(type ?? 'blog') ?? [];
  const [remote, local] = map;
  const remotePosts = (await fetchCollection(remote, drafts)).map(
    mapRemotePostFrontmatter,
  );
  const localPosts = await fetchCollection(local, drafts);

  return [...remotePosts, ...localPosts].sort((a, b) => {
    const dateA = a.data.endDate ?? a.data.updatedDate ?? a.data.pubDate;
    const dateB = b.data.endDate ?? b.data.updatedDate ?? b.data.pubDate;
    return (dateB?.getTime() ?? 0) - (dateA?.getTime() ?? 0);
  });
}

/**
 * post.rendered.metadata.frontmatter.title ==> title
 * post.data.title ==> id / slug
 */
export function mapRemotePostFrontmatter(post: CollectionEntry<CollectionKey> | any) {
  const { data, ...theRest } = post;
  const { frontmatter } = post.rendered?.metadata ?? {};
  const { title: id } = data;
  const pubDate = frontmatter.pubDate ?? data.pubDate;
  const { startDate, endDate } = frontmatter;

  Object.assign(data, {
    ...frontmatter,
    author: frontmatter.author ?? data.author?.username,
    category: frontmatter.category,
    // pubDate: frontmatter.pubDate && new Date(frontmatter.pubDate ?? data.pubDate ?? data.published),
    // updatedDate: updated && new Date(updated),
    // startDate: frontmatter.startDate && new Date(frontmatter.startDate),
    // endDate: frontmatter.endDate && new Date(frontmatter.endDate),
    gh: !!post.digest,
    type: pubDate ? 'blog' : 'works',
    digest: post.digest,
  });

  if (pubDate) {
    data.pubDate = new Date(pubDate ?? data.published);
  }

  if (endDate) {
    data.endDate = new Date(endDate);
  }

  if (startDate) {
    data.startDate = new Date(startDate);
  }

  theRest.id = id;
  const result = { data, ...theRest };
  return result;
}
