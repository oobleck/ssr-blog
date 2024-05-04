import { settings } from "@/data/settings";
import { getBlogPosts } from "@/utils/get-posts";
import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("/blog/*.md*", { eager: true });
const blog = await getBlogPosts(false);
const posts = Object.values(postImportResult);

export const GET = (ctx: Record<string, unknown>) =>
    rss({
        title: settings.title,
        description: settings.description,
        site: import.meta.env.SITE,
        stylesheet: '/rss.xsl',
        items: blog.map(({slug, data}) => ({
            link: `/blog/${slug}`,
            title: data.title,
            pubDate: data.date,
        })),
    });
