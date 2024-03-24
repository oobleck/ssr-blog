import { readFile } from "fs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
import { imageService } from "@unpic/astro/service";
import svelte from "@astrojs/svelte";

const iconConfig = {
  include: {
    "ri": [
      "mastodon-line",
      "linkedin-line",
      "github-line",
      "pixelfed-line",
      "home-office-line",
      "mail-send-line",
      "file-pdf-2-line",
      "codepen-line",
    ],
    "simple-icons": [
      "codepen",
      "mastodon",
      "linkedin",
      "github",
      "minutemailer",
    ],
    "material-symbols-light": [
      "label",
      "close-rounded",
      "light-mode-outline-rounded",
      "dark-mode-outline-rounded",
      "menu-rounded",
      "rocket-launch-outline-rounded",
      "globe",
      "stacked-email",
      "picture-as-pdf",
    ],
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://spencerrhodes.dev/",
  integrations: [
    sitemap(),
    compress(),
    robotsTxt(),
    mdx(),
    icon(iconConfig),
    svelte(),
  ],
  image: {
    service: imageService({
      placeholder: "blurhash",
      layout: "constrained",
    }),
  },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      // theme: "solarized-dark",
      theme: "nord",
      // Enable word wrap to prevent horizontal scrolling
      wrap: false,
    },
  },
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
  },
});
