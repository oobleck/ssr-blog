import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import { imageService } from "@unpic/astro/service";
import compress from "astro-compress";
import icon from "astro-icon";
import preload from "astro-preload";
import remarkEleventyImage from "astro-remark-eleventy-image";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { viteStaticCopy } from "vite-plugin-static-copy";
import markdownConfig from './markdown.config';
import { settings } from "./src/data/settings";

export function customMarkup({
  src,
  sources,
  width,
  height,
  alt
}) {
  return `
  <picture>
    ${sources}
    <img
      src="${src}"
      width="${width}"
      height="${height}"
      alt="${alt}"
      loading="lazy"
      decoding="async">
   </picture>
   `;
}
const remarkEleventyConfig = {
  remoteImages: true,
  altRequired: true,
  customMarkup
} as const;

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap(), compress(), mdx(), icon(),
  // icon(iconConfig),
  svelte(),
  remarkEleventyImage(remarkEleventyConfig)
  ],
  image: {
    service: imageService({
      placeholder: "blurhash",
      layout: "constrained"
    })
  },
  markdown: {
    ...markdownConfig,
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      // theme: "solarized-dark",
      theme: "nord",
      // Enable word wrap to prevent horizontal scrolling
      wrap: false
    }
  },
  // integrations: [
  //   mdx({
  //     ...markdownConfig,
  //   }),
  // ],
  vite: {
    build: {
      cssMinify: "lightningcss"
    },
    ssr: {
      external: ['@11ty/eleventy-img']
    },
    css: {
      transformer: "lightningcss",
      lightningcss: {
        // targets: browserslistToTargets(browserslist("defaults")),
        targets: browserslistToTargets(browserslist(">= 0.25%")),
        cssModules: true,
        drafts: {
          // Enable custom media queries
          customMedia: true
        }
      }
    },
    plugins: [viteStaticCopy({
      targets: [{
        src: "node_modules/@shoelace-style/shoelace/dist/",
        dest: 'shoelace'
      }, {
        src: "public/pagefind/",
        dest: "find"
      }]
    })]
  }
});
