import { getMergedPosts } from './merged-posts';
import {fetchCollection} from './get-collection';
import {taggify} from './taggify';

export async function getTags(type: string): string[] {
  const allPosts = type === 'blog' ? await getMergedPosts() : await fetchCollection(type);
  const uniqueTags = [
    ...new Set(allPosts.map((post: any) => post.data.tags.map((tag) => taggify(tag))).flat()),
  ];

  return uniqueTags.reduce((agg, tag) => ({...agg, [tag]: `/${type}/tags/${tag}`}), {});
}
