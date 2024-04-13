export type BlogrollCategory = 'tech' | 'webdev' | 'people' | 'newsletter' | 'misc';
export interface BlogrollItem {
  category: BlogrollCategory[];
  tags?: string[];
  dateAdded: string | Date;
  dateUpdated?: string | Date;
  label?: string;
  description?: string;
  webpage: string[];
  syndicationLink?: string;
}

const hashtags = ["WebDev", "DesignSystems", "UX", "PKM", "Frontend"];

export const blogroll: BlogrollItem[] = [
  {
    category: ['webdev'],
    tags: ['smallweb', 'webmentions'],
    dateAdded: '2024-04-04',
    webpage: [ 'https://indieweb.org/' ],
    label: 'IndieWeb',
    description: "The IndieWeb is a people-focused alternative to the “corporate web”"
  },
  {
    category: ['webdev', 'people'],
    tags: ['css', 'frontend'],
    dateAdded: '2024-04-06',
    webpage: [ 'https://chriscoyier.net' ],
    syndicationLink: "https://chriscoyier.net/feed/",
    label: "Chris Coyier",
    description: "Web developer and creator of CSSTricks and Codepen.io",
  },
  {
    category: ['webdev', 'people'],
    tags: ['css', 'color', 'frontend'],
    dateAdded: "2024-04-06",
    webpage: [ "https://lea.verou.me" ],
    syndicationLink: "https://lea.verou.me/feed.xml",
    label: "Lea Verou",
    description: "Web developer, CSS guru, creator of Color.js",
  },
  {
    category: ['misc'],
    dateAdded: '2024-04-06 12:05:23',
    webpage: [ "https://xkcd.com/" ],
    syndicationLink: "https://xkcd.com/rss.xml",
    label: "XKCD",
    description: "Needs no introduction",
    tags: ['comics'],
  },
  {
    category: ['webdev'],
    dateAdded: "2024-04-06",
    webpage: [ "https://developer.mozilla.org/" ],
    syndicationLink: "https://developer.mozilla.org/en-US/blog/rss.xml",
    label: "Mozilla Developer Network",
    description: "THE reference for Web technologies",
    tags: ["docs", "reference"],
  },
  {
    label: "Javascript Weekly",
    tags: ["javascript"],
    category: ["webdev", "newsletter"],
    dateAdded: "2024-04-06",
    webpage: [ "https://javascriptweekly.com/" ],
    syndicationLink: "https://javascriptweekly.com/rss/",
    description: "A newsletter of JavaScript articles, news and cool projects",
  },
  {
    label: "Frontend Focus",
    category: ["webdev", "newsletter"],
    tags: ["ui", "frontend"],
    dateAdded: "2024-04-06",
    webpage: [ "https://frontendfoc.us/" ],
    syndicationLink: "https://frontendfoc.us/rss/",
    description: "A once–weekly roundup of the best front-end news..."
  },
  {
    label: "Bytes",
    description: "Your weekly dose of JS",
    category: ["webdev", "newsletter"],
    tags: ["javascript"],
    webpage: [ "https://bytes.dev/" ],
    dateAdded: "2024-04-06",
  },
  {
    label: "Chris Trottier",
    description: "Fediverse cheerleader and interesting thinker",
    category: ["people"],
    tags: ["fediverse", "mastodon", "tech"],
    webpage: [ "https://atomicpoet.org/@atomicpoet" ],
    // syndicationLink: "https://atomicpoet.org/@atomicpoet.rss",
    dateAdded: "2024-04-07",
  },
  {
    label: "The Linux Experiment",
    description: "Blog, news, and Youtube channel about Nick's adventure using Linux as his daily driver",
    category: ["tech"],
    tags: ["linux"],
    webpage: [ "https://thelinuxexp.com/" ],
    syndicationLink: "https://thelinuxexp.com/feed.xml",
    dateAdded: "2024-04-06",
  },
  {
    label: "Nick",
    description: "The blogger/podcaster/tuber/dude behind The Linux Experiment on Mastodon",
    category: ["people", "tech"],
    tags: ["linux", "mastodon"],
    dateAdded: "2024-04-06",
    webpage: [ "https://mastodon.social/@thelinuxEXP" ],
    syndicationLink: "https://mastodon.social/@thelinuxEXP.rss",
  },
  {
    label: "JSter",
    description: "No nonsense list of curated JavaScript links",
    category: ["newsletter", "webdev"],
    tags: ["javascript"],
    dateAdded: "2024-04-06",
    webpage: [ "https://buttondown.email/jster" ],
    syndicationLink: "https://buttondown.email/jster/rss",
  },
  {
    label: "Ryan Barrett (snarfed)",
    description: "Software engineer and pillar of the IndieWeb movement",
    category: ["people", "tech"],
    tags: ["fediverse"],
    dateAdded: "Wed Apr 10 2024 10:02:35 GMT-0700 (Pacific Daylight Time)",
    webpage: [ "https://snarfed.org" ],
    syndicationLink: "https://snarfed.org/feed",
  },
  {
    label: "Eric Elliott",
    description: "JavaScript/TypeScript teacher and mentor",
    category: ["webdev", "people"],
    tags: [],
    dateAdded: "Wed Apr 10 2024 10:26:10 GMT-0700 (Pacific Daylight Time)",
    webpage: [ "https://medium.com/@_ericelliott", "https://github.com/ericelliott" ],
    syndicationLink: "https://medium.com/feed/@_ericelliott",
  },
  ...hashtags.map((tag) => ({
    label: `#${tag}`,
    description: `#${tag} hashtag on Mastodon`,
    category: ["misc"],
    webpage: [`https://fosstodon.org/tags/${tag.toLowerCase()}`],
    syndicationLink: `https://fosstodon.org/tags/${tag.toLowerCase()}.rss`,
    dateAdded: new Date(),
  } as BlogrollItem)),
];
