import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<'blog'>;

export function chronoSort(a: BlogPost, b: BlogPost): number {
  const aDate = new Date(a.data?.updatedDate ?? a.data?.date);
  const bDate = new Date(b.data?.updatedDate ?? b.data?.date);
  return bDate < aDate ? -1 : 1;
}

export function sortBy<T = any>(sortBy: keyof BlogPost['data'] = 'date'): (a: T, b: T) => number {
  const willReverse = /^-/.test(sortBy) ? -1 : 1;
  const postProp = sortBy.replace(/^-/, '');
  return (a: T, b: T) => {
    const aPost = a.data ?? a.frontmatter;
    const bPost = b.data ?? b.frontmatter;
    let aValue, bValue;

    switch (postProp) {
      case 'title':
        return (aPost[postProp] > bPost[postProp] ? -1 : 1) * willReverse;
        break;

      case 'updatedDate':
        aValue = new Date(aPost.updatedDate ?? aPost.date);
        bValue = new Date(bPost.updatedDate ?? bPost.date);
        break;

      default:
        aValue = aPost[postProp];
        bValue = bPost[postProp];
    }

    return (aValue - bValue) * willReverse
  };
}

export async function getBlogPosts(includeDrafts = false): Promise<BlogPost[]> {
  return getCollection('blog', ({ data: { draft = false } }) => includeDrafts || !draft);
}
