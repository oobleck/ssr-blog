import { remoteImageUrl } from "../utils/image.utils";
import { transformUrl } from "unpic";

// Main Site Settings
const heroImageIds = {
  blueRiverDelta: "un:c9MFM8rSMsQ",
  grayRiverDelta: "un:_p6UaQYXcn8",
  purpleCrystal: "un:9XngoIpxcEo",
  purpleRain: "un:7NoLliK6ntc",
  driedLava: "px:983200",
  aquaAbstractPainting: "px:2130474",
  macroDawnWaves: "px:355288",
  blackSandWaves: "px:4705018",
  bokehPink: "px:1210276",
  purpleBeachLightning: "px:2418664",
  beachPoppies: "px:1058836",
  ggBridgeFog: "un:wLOZOlfRH_A",
};

const heros = {
  arcticLake:
    "https://images.unsplash.com/photo-1536745287225-21d689278fd1?w=2000",
  redBlueSwirl:
    "https://images.unsplash.com/photo-1574169208507-84376144848b?w=2000",
  aquaOrangeFire:
    "https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?w=2000",
  paleBlueSnowscape:
    "https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=2000",
  neonInkSpill:
    "https://images.unsplash.com/photo-1591393223703-56fe1347ac62?w=2000",
  darkSunsetClouds:
    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=2000",
  greenRainyLake:
    "https://images.unsplash.com/photo-1517635954237-7c23b37adb9c?w=2000",
  blueSunrise:
    "https://images.unsplash.com/photo-1599711428625-f6cc0ca730b8?w=2000",
  blueRedStreaks:
    "https://images.unsplash.com/photo-1652044049927-7142ea82c81d?w=2000",

  // https://unsplash.com/photos/calm-water-QtIXL7C4bB0
  blueGoldWaves:
    "https://images.unsplash.com/photo-1463134836706-8bcc60f7d78b?w=2000",
};

export const settings = {
  site: "https://spencerrhodes.dev",
  title: "Spencer Rhodes",
  description: "User Interface Developer",
  // hero: remoteImageUrl(heroImageIds.ggBridgeFog),
  hero: heros.blueGoldWaves,
  authorImage: "../assets/images/ssr-sawyer-avatar.png",
};

// Main Menu
export const menu = [
  // { name: "Home", link: "/" },
  { name: "Blog", link: "/blog/1" },
  { name: "About", link: "/about" },
  { name: "Résumé", link: "/cv" },
  { name: "Tags", link: "/tags" },
  { name: "Contact", link: "/contact" },
];

// Footer Social Links
// Find Icons here: https://icon-sets.iconify.design/
export const social = [
  {
    name: "Website",
    icon: "material-symbols-light:in-home-mode",
    url: settings.site,
  },
  {
    name: "Codepen",
    icon: "simple-icons:codepen",
    url: "https://codepen.io/oobleck",
  },
  {
    name: "Mastodon",
    icon: "simple-icons:mastodon",
    url: "https://fosstodon.org/@oobleck",
  },
  {
    name: "linkedin",
    icon: "simple-icons:linkedin",
    url: "https://www.linkedin.com/in/oobleck",
  },
  {
    name: "github",
    icon: "simple-icons:github",
    url: "https://github.com/oobleck",
  },
  {
    name: "email",
    icon: "simple-icons:minutemailer",
    url: "/contact",
  },
];
