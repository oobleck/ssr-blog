// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export interface SocialLink {
  url: string;
  icon?: string;
  label: string;
  primary?: boolean;
}

export const SITE_TITLE = 'Spencer Rhodes';
export const SITE_OWNER = SITE_TITLE;
export const SITE_TAGLINE = 'User Interface Developer';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Mastodon',
    icon: 'mdi:mastodon',
    url: 'https://fosstodon.org/@oobleck',
    primary: true,
  },
  {
    label: 'Codepen',
    icon: 'mdi:codepen',
    url: 'https://codepen.io/oobleck',
    primary: true,
  },
  {
    label: 'LinkedIn',
    icon: 'mdi:linkedin',
    url: 'https://linkedin.com/in/oobleck',
    primary: true,
  },
  {
    label: 'GitHub',
    icon: 'mdi:github',
    url: 'https://github.com/oobleck',
  },
  {
    label: 'Codeberg',
    icon: 'mdi:git',
    url: 'https://codeberg.org/oobleck',
  },
].sort((a, b) => {
  const primarySort = a.primary ? -1 : 0;
  return primarySort && a.label.localeCompare(b.label);
});
