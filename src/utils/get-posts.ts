import { getCollection } from "astro:content";

export async function getBlogPosts(includeDrafts = false) {
  return getCollection('blog', ({data: {draft = false}}) => includeDrafts || !draft);
}
