import type { ShikiConfig } from "astro";
import { SITE_OWNER, SITE_TAGLINE, SITE_TITLE } from "../consts";

export const DEV = !!process.env.NODE_ENV?.includes('dev');
export const BLOG_PATH = 'blog' as const;
export const WORKS_PATH = 'works' as const;

const heros = {
  arcticLake: "https://images.unsplash.com/photo-1536745287225-21d689278fd1",
  redBlueSwirl: "https://images.unsplash.com/photo-1574169208507-84376144848b",
  aquaOrangeFire:
    "https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09",
  paleBlueSnowscape:
    "https://images.unsplash.com/photo-1558865869-c93f6f8482af",
  neonInkSpill: "https://images.unsplash.com/photo-1591393223703-56fe1347ac62",
  darkSunsetClouds:
    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
  greenRainyLake:
    "https://images.unsplash.com/photo-1517635954237-7c23b37adb9c",
  blueSunrise: "https://images.unsplash.com/photo-1599711428625-f6cc0ca730b8",
  blueRedStreaks:
    "https://images.unsplash.com/photo-1652044049927-7142ea82c81d",

  // https://unsplash.com/photos/calm-water-QtIXL7C4bB0
  blueGoldWaves: "https://images.unsplash.com/photo-1463134836706-8bcc60f7d78b",

  // https://unsplash.com/photos/a-blurry-image-of-a-bright-orange-and-blue-light-sDd9hIAS_IU
  darkAmberSparks:
    "https://images.unsplash.com/photo-1567919914972-4281c4e0e7ae",

  // https://unsplash.com/photos/a-blurry-image-of-a-person-walking-down-a-street-cdZF9FO-tlo
  darkAquaRain:
    "https://images.unsplash.com/photo-1567919915310-0ec7b49bfb12?iw=2000",

  sfFog: "https://images.unsplash.com/photo-1466446198467-e45c851bbd5a",

  skullFire: "https://images.unsplash.com/photo-1654859869130-fd0a2aa5539b",
};

export const settings = {
  owner: SITE_OWNER,
  site: "https://www.spencerrhodes.dev",
  domain: `www.spencerrhodes.dev`,
  title: SITE_TITLE,
  email: "me@spencerrhodes.dev",
  // obfuscatedEmail: maskEmail("me@spencerrhodes.dev"),
  description: SITE_TAGLINE,
  hero: `${heros.darkSunsetClouds}?w=2000&h=300&fit=crop&fm=webp`,
  // hero: '/images/header-bg.webp',
  // authorImage: "https://avatars.githubusercontent.com/u/440719?v=4",
  authorImage: "/images/site-author.png",
  resumePdfFile: `${(SITE_OWNER || SITE_TITLE || "My").replace(/\W+/g, '-')}-Resume.pdf`,
  giscusCategory: {
    name: "Giscus",
    id: "DIC_kwDOLEM0es4Cm4HT",
  },
  ghDiscussionsPosts: {
    category: "Published",
  },
  bridgyEndpoints: [
    // https://brid.gy/about#webmentions
    // https://brid.gy/mastodon/@oobleck@fosstodon.org
    "https://brid.gy/publish/mastodon",
    "https://brid.gy/publish/github",
  ],
};
settings.site = `https://${settings.domain}`;

// Main Menu
export const menu = [
  // { name: "Home", link: "/" },
  { name: "Blog", link: "/blog/1" },
  { name: "Tags", link: "/tags" },
  { name: "Links", link: "/links" },
  { name: "About", link: "/about" },
  { name: "CV", link: "/cv" },
  { name: "Contact", link: "/contact" },
];

// Footer Social Links
// Find Icons here: https://icon-sets.iconify.design/
export const social = [
  {
    name: "Website",
    // icon: "ri:home-office-line",
    icon: 'house-door-fill',
    url: settings.site,
    primary: true,
  },
  {
    name: settings.email,
    // icon: "ri:mail-send-line",
    icon: 'send-fill',
    url: '/contact',
    primary: true,
  },
  // {
  //   name: "PDF Resume",
  //   // icon: "ri:file-pdf-2-line",
  //   icon: 'file-earmark-pdf-fill',
  //   url: "/spencer-rhodes-resume.pdf",
  // },
  {
    name: "LinkedIn",
    // icon: "simple-icons:linkedin",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/oobleck",
    username: "oobleck",
    primary: true,
  },
  {
    name: "Codepen",
    icon: "simple-icons:codepen",
    url: "https://codepen.io/oobleck",
    username: "oobleck",
    primary: true,
  },
  {
    name: "Mastodon",
    // icon: "simple-icons:mastodon",
    icon: 'mastodon',
    url: "https://fosstodon.org/@oobleck",
    username: "oobleck",
    // primary: true,
  },
  {
    name: "Github",
    // icon: "simple-icons:github",
    icon: "github",
    url: "https://github.com/oobleck",
    username: "oobleck",
  },
  {
    name: "Disroot",
    icon: "simple-icons:disroot",
    url: "https://git.disroot.org/oobleck",
    username: "oobleck",
  },
  // {
  //   name: "Codeberg",
  //   icon: "simple-icons:codeberg",
  //   url: "https://codeberg.org/oobleck",
  //   username: "oobleck",
  // },
  // {
  //   name: "Pixelfed",
  //   icon: "simple-icons:pixelfed",
  //   url: "https://pixelfed.social/@oobleck",
  //   username: "@oobleck",
  // },
  {
    name: "RSS",
    // icon: "simple-icons:rss",
    icon: "rss-fill",
    url: `/rss.xml`,
    primary: true,
  },
];

export const LG_CONFIG_BASE = {
  licenseKey: '1000-0000-000-0000',
  // https://www.lightgalleryjs.com/docs/settings/
  speed: 500,
  mode: 'lg-fade',
  download: false,
  easing: 'ease-out',
  hideScrollbar: true,
  toggleThumb: true,
  loop: true,
};

export const SHIKI_CONFIG: ShikiConfig = {
  themes: {
    light: "houston",
    dark: "kanagawa-wave",
  },
};

// 303C7D69F27F33669380AF45C93DB01B25061380
export const GPG_PUBLIC_KEY_ID = 'C93DB01B25061380';
