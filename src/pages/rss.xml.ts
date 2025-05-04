import rss from '@astrojs/rss';
import { getMergedPosts } from '@utils/merged-posts';
import type { APIRoute } from 'astro';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export const GET: APIRoute = async (context) => {
  const { request } = context;
  const posts = await getMergedPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
