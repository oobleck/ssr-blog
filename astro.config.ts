// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import AutoImport from 'astro-auto-import';
import favicons from 'astro-favicons';
import icon from 'astro-icon';
import readingTime from 'astro-reading-time';
import { defineConfig } from 'astro/config';
import { h } from 'hastscript';
import rehypeLinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import * as compiler from 'vue/compiler-sfc';
// import remarkToc from 'remark-toc';
import { brainDbAstro, getBrainDb } from '@braindb/astro';
import remarkWikiLink from '@braindb/remark-wiki-link';
import expressiveCode from 'astro-expressive-code';
import pagefind from 'astro-pagefind';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import remarkCallout from 'remark-callout';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { settings, SHIKI_CONFIG } from './src/data/settings.ts';

import mailObfuscation from 'astro-mail-obfuscation';

const bdb = getBrainDb();
await bdb.ready();
// console.log(bdb.documentsSync());

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [
    // pdf({ pages: { '/cv': settings.resumePdfFile } }),
    brainDbAstro({ remarkWikiLink: false, storeMarkdown: true, git: false }),
    expressiveCode(),
    AutoImport({
      imports: [
        {
          '@components/HeaderLink.astro': [
            ['default', 'Link'],
            ['default', 'Lnk'],
            ['default', 'HeaderLink'],
            ['default', 'NavLink'],
          ],
        },
        '@components/CodeBlock.astro',
        '@components/AboutMe.astro',
        '@components/GpgKey.astro',
        { '@components/CodePen.astro': [['default', 'CodePen']] },
        {
          '@components/ImageGallery.astro': [
            ['default', 'Gallery'],
            ['default', 'ImageGallery'],
          ],
        },
        { 'astro-icon/components': ['Icon'] },
        {
          '@layouts/Base.astro': [
            ['default', 'Base'],
            ['default', 'Layout'],
          ],
        },
      ],
    }),
    sitemap(),
    icon(),
    vue({
      compiler,
      appEntrypoint: '/src/pages/_vue',
      jsx: true,
      template: {
        compilerOptions: {
          isCustomElement: (tag) => /^(s|sl)-[\w]+/i.test(tag),
        },
      },
    }),
    pagefind(),
    favicons(),
    readingTime(), // svelte(),
    // lit(),
    mdx({ extendMarkdownConfig: true, optimize: true }),
    mailObfuscation(),
  ],
  markdown: {
    gfm: true,
    shikiConfig: SHIKI_CONFIG,
    remarkPlugins: [
      [
        remarkCallout,
        {
          calloutContainer: 'div',
          // embedDefaultColor: true,
          customClassNames: ['admonition'],
          callouts: {},
        },
      ],
      [
        remarkWikiLink,
        {
          XlinkTemplate: ({ slug, alias }) => {
            const [slugWithoutAnchor, anchor] = slug.split('#');
            if (slugWithoutAnchor) {
              const doc = bdb.documentsSync({ slug: slugWithoutAnchor })[0];
              // console.log(bdb.documentsSync({ slug: slugWithoutAnchor }));
              if (doc) {
                if (!doc.frontmatter().draft || import.meta.env.DEV) {
                  return {
                    hName: 'a',
                    hProperties: {
                      href: anchor ? `${doc.url()}#${anchor}` : doc.url(),
                      class: doc.frontmatter().draft ? 'draft-link' : '',
                    },
                    hChildren: [
                      {
                        type: 'text',
                        value: alias == null ? doc.frontmatter().title : alias,
                      },
                    ],
                  };
                }
              }
            }

            return {
              hName: 'span',
              hProperties: {
                class: 'broken-link',
                title: `Can't resolve link to ${slug}`,
              },
              hChildren: [{ type: 'text', value: alias || slug }],
            };
          },
        },
      ],
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeLinkHeadings,
        {
          // behavior: 'before',
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            className: 'segment-link',
          },
          content: (node) =>
            h('sl-icon', { name: 'link-45deg', ariaHidden: true }),
        },
      ],
      [
        rehypeToc,
        {
          // position: 'afterbegin',
          headings: ['h1', 'h2', 'h3'],
          cssClasses: {
            toc: 'toc',
            item: 'toc-item',
            link: 'toc-link',
            active: 'toc-active',
          },
          customizeTOC: (toc) => {
            if (!toc.children[0]?.children?.length) return null;
            return h(
              'sl-details',
              {
                open: true,
                className: 'toc-container',
                summary: 'In this article',
              },
              [
                // h('summary', [h('h5', { className: 'toc-title' }, 'In this article')]),
                toc,
              ],
            );
          },
        },
      ],
    ],
  },
  image: {
    // domains: ['unsplash.com', 'images.unsplash.com', 'cdn.pixabay.com', 'pixabay.com'],
    remotePatterns: [
      { protocol: 'https', hostname: '**.*', pathname: '/**' },
      { protocol: 'https', hostname: '**.unsplash.com' },
      { protocol: 'https', hostname: '**.pixabay.com' },
      { protocol: 'https', hostname: 'imageplaceholder.net' },
      { protocol: 'https', hostname: '**.githubusercontent.com' },
    ],
  },
  redirects: {
    '/': '/home',
    '/index': '/home',
    '/works': '/works/1',
    '/projects': '/works/1',
    '/blog': '/blog/1',
    // '/blog/cat/[category]': '/blog/cat/[category]/1',
    // '/blog/chrono/[month]': '/blog/chrono/[month]/1',
  },
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/@shoelace-style/shoelace/dist/',
            dest: 'shoelace',
          },
          // {
          //   src: 'public/pagefind/',
          //   dest: 'find',
          // },
        ],
      }),
    ],
    build: { cssMinify: 'lightningcss', sourcemap: true },
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        targets: browserslistToTargets(browserslist('defaults')),
        // cssModules: true,
        drafts: {
          // Enable custom media queries
          customMedia: true,
        },
      },
    },
  },
});
