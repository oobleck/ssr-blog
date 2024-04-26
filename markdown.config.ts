import remarkToc from "remark-toc";
import rehypeToc from "rehype-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeFigure from "rehype-figure";
import { remarkReadingTime } from "./plugins/remark-reading-time";

export default {
  remarkPlugins: [
    [remarkToc, {
      tight: true,
      ordered: true,
      parents: ['root'],
    }],
    [remarkReadingTime, {}]
  ],
  rehypePlugins: [
    [rehypeExternalLinks, {
      target: '_blank',
      rel: ['nofollow', 'noreferrer', 'noopener'],
    }],
    [
      rehypeFigure, {},
    ],
    [
      rehypeSlug,
      {},
    ],
    [rehypeAutolinkHeadings, {
      // behavior: 'before',
      // content: {
      //   type: 'text',
      //   value: '#',
      // },
      properties: { className: 'anchor-link', ariaHidden: true, tabIndex: -1 },
      headingProperties: { className: 'anchor-added' },
    }],
    [
      rehypeToc,
      {
        headings: ["h1", "h2", "h3", "h4"],
        cssClasses: {
          toc: "toc-post",
          link: "toc-link",
        },
        customizeTOC: (toc) => {
          // No headings? No TOC!
          if (!toc.children?.[0]?.children?.length) {
            return;
          }

          // Wrap the TOC in a details+summary
          const wrapper = {
            type: 'element',
            tagName: 'details',
            properties: {
              className: 'toc-block',
            },
            children: [
              {
                type: 'element',
                tagName: 'summary',
                children: [
                  {
                    type: 'element',
                    tagName: 'h5',
                    properties: {
                      style: `display: inline-block;`,
                    },
                    children: [
                      {
                        type: 'text',
                        value: 'In this post',
                      },
                    ],
                  },
                ],
              },
              toc,
            ],
          };
          // toc.tagName = 'details';
          return wrapper;
        },
        // customizeTOCItem: (item, heading) => console.log('item', {item, heading}),
      },
    ],
  ],
};
