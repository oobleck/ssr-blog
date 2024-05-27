import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import { imageService } from "@unpic/astro/service";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { viteStaticCopy } from "vite-plugin-static-copy";
import markdownConfig from './markdown.config';

// https://astro.build/config
export default defineConfig({
  site: "https://spencerrhodes.dev/",
  integrations: [
    sitemap(),
    compress(),
    mdx(),
    icon(),
    // icon(iconConfig),
    svelte(),
  ],
  image: {
    service: imageService({
      placeholder: "blurhash",
      layout: "constrained",
    }),
  },
  markdown: {
    ...markdownConfig,
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      // theme: "solarized-dark",
      theme: "nord",
      // Enable word wrap to prevent horizontal scrolling
      wrap: false,
    },
  },
  // integrations: [
  //   mdx({
  //     ...markdownConfig,
  //   }),
  // ],
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
    css: {
      transformer: "lightningcss",
      lightningcss: {
        // targets: browserslistToTargets(browserslist("defaults")),
        targets: browserslistToTargets(browserslist(">= 0.25%")),
        cssModules: true,
        drafts: {
          // Enable custom media queries
          customMedia: true,
        },
      },
    },
    plugins: [
      viteStaticCopy({
        targets: [{
          src: "node_modules/@shoelace-style/shoelace/dist/",
          dest: 'shoelace',
        }],
      }),
    ],
  },
});
