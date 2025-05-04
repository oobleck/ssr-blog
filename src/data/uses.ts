const PLATFORMS = ["iOS", "macOS", "Unix/Linux", "Windows", "web"] as const;
const TAGS = ["productivity", "email", "calendar", "notes", "pkm"] as const;
const CETEGORIES = [
  "software & services",
  "hardware",
  "kitchen",
  "defaults",
  "day job",
  "config",
  "stack",
  ...PLATFORMS,
] as const;
export type TCategory = (typeof CETEGORIES)[number];
export type TTag = (typeof TAGS)[number];
export type TPlatform = (typeof PLATFORMS)[number];
export interface IUses {
  name: string;
  url?: string;
  tags?: string[];
  categories?: TCategory[];
  platforms?: TPlatform[];
  description?: string;
  disabled?: boolean;
  fav?: 1 | 2 | 3 | 4 | 5;
  oss?: boolean;
}

export interface IUsesProps {
  items: IUses[];
  category: TCategory;
  description?: string;
}

export const PLATFORM_ICONS: Record<TPlatform, string> = {
  macOS: "simple-icons:apple",
  iOS: "simple-icons:ios",
  Windows: "ri:windows-line",
  "Unix/Linux": "simple-icons:linux",
  web: "simple-icons:vivaldi",
};

export const itemSort = (a: IUses, b: IUses) => {
  // oss, fav, name
  return (
    (a ? -1 : 1) || b.name.localeCompare(a.name)
    // || b.fav || 0 - a.fav || 0
  );
};

export const USES: IUses[] = [
  {
    name: "FMail2",
    url: "https://fmail-app.fr/",
    platforms: ["macOS"],
    categories: ["software & services", "defaults"],
    description: "Desktop wrapper for Fastmail PWA",
    tags: ["email", "productivity"],
    fav: 5,
  },
  {
    name: "Fastmail",
    description:
      "Awesome email/calendar provider. It's killer feature(s)? Privacy and simple effective filtering. 'Cuz there's a lot of noise in the ether.",
    url: "https://fastmail.com",
    platforms: ["web"],
    categories: ["software & services", "defaults"],
    tags: ["productivity", "email"],
    fav: 5,
  },
  {
    name: "Spark",
    url: "https://sparkmailapp.com",
    platforms: ["iOS", "macOS"],
    categories: ["software & services", "defaults"],
    description: "Sexy modern email client",
    fav: 4,
  },
  {
    name: "Obsidian",
    description:
      "Sexy Markdown note taking. Not my <a href='https://maggieappleton.com/basb' target='_blank' rel='external noreferrer'>second brain</a> yet.",
    url: "https://obsidian.md",
    platforms: ["iOS", "macOS", "Windows"],
    categories: ["software & services", "defaults"],
    tags: ["pkm", "notes", "productivity"],
    fav: 4,
  },
  {
    name: "2022 M1 MacBook Air",
    description:
      "While this is a modest machine in terms of computing power, it's a rockstar for frontend work. I can it for a whole day on battery running some pretty heavy node applications and it doesn't flinch.",
    categories: ["hardware", "defaults"],
    fav: 5,
  },
  {
    name: 'Samsung U28E510 28" 4K display',
    description:
      "Nothing too special. Lots of screen real estate, reasonable contrast.",
    url: "https://www.samsung.com/us/computing/monitors/uhd-and-wqhd/28--ue510-uhd-monitor--refurbished--lu28e510ds-za-r/",
    categories: ["hardware", "day job"],
  },
  {
    name: "Dell Precision 3561",
    url: "https://www.dell.com/en-us/shop/dell-laptops/precision-3561-day jobstation/spd/precision-15-3561-laptop/s0010p356115us_vp",
    description:
      'While definitely not my preferred platform, this machine performs fine on mains power. I can\'t stomache Windows/DOS/PowerShell, but I run WSL2+Ubuntu and it is "good enough".',
    categories: ["day job"],
  },
  {
    name: "Logitech MX Keys S",
    url: "https://www.amazon.com/Logitech-Programmable-Backlighting-Bluetooth-Rechargeable/dp/B0BKW3LB2B?th=1",
    categories: ["hardware", "day job"],
  },
  {
    name: "Logitech M570 Trackball mouse",
    url: "https://www.amazon.com/Logitech-M570-Wireless-Trackball-Mouse/dp/B0043T7FXE?crid=2DBXRXMO9SVRX&dib=eyJ2IjoiMSJ9.SxsMexFWPrF0qspwdUzA0jP-BaO38eEAlm1DGvjktFMYnfzxp3TjP5sPpi0ihD4C7bU6LclRKlgG6FEFctQIuadXBdF8ZBOChJO6ArLSS3ZSCar_w2sswRv-AEha_yyl1HwTwFR5JQSYnahc-N1FzqKknkjPG6mX-6PZc5H6M1K9RhIAovYIqCdAFcClMQSF0TI9Le3xsnRgoYrEjkAGO7BC0Oj6hDY5dD58efaRg0Tv7qFxwvlxDnm6uVlkHpIQNd6GArYT_BgZy19cJ2Ww88lNR4n9YxOQps688WJFYoZb6citu58hlyrfQvMkOat4QUhqvxW5p1J83bzoDXriq71-8OH9spWg5juvR9Vzc_w.0WziKo86929U0rsyBRmXUuTQa5oCgiRIwxtSr5B0FV0&dib_tag=se&sprefix=Logitech+M570+,electronics,138",
    categories: ["hardware", "day job"],
  },
  {
    name: "Neovim",
    url: "https://neovim.io",
    oss: true,
    description:
      "I love tinkering. Perhaps too much. I have tried many pre-configs, and rolled my own based on Kickstart. But I switched to AstroNvim pre-config in 2023 for a lower friction experience. Did I achieve this? Eh. That's debatable.",
    categories: ["software & services", "defaults"],
    tags: ["IDE", "dev"],
    platforms: ["macOS", "Windows", "Unix/Linux"],
    fav: 5,
  },
  {
    name: "AstroNvim",
    url: "https://git.disroot.org/oobleck/nvim-astrovim",
    oss: true,
    description:
      "My current fav pre-config for Neovim. Mine is heavily modified at this point.",
    tags: ["IDE", "dev"],
    categories: ["software & services", "config", "defaults"],
    platforms: ["macOS", "Windows", "Unix/Linux"],
    fav: 5,
  },
  {
    name: "WezTerm",
    url: "https://wezfurlong.org/wezterm/",
    oss: true,
    description: "Robust and deeply configurable terminal emulator.",
    platforms: ["macOS", "Windows"],
    categories: ["software & services", "defaults"],
  },
  {
    name: "Ghostty",
    url: "https://github.com/ghostty-org/ghostty/",
    oss: true,
    description: "fast, feature-rich, and cross-platform terminal emulator that uses platform-native UI and GPU acceleration.",
    platforms: ["macOS"],
    categories: ["software & services", "defaults"],
  },
  {
    name: "iPhone 11",
    description: "Yup. Still kickin'.",
    categories: ["hardware"],
  },
  {
    name: "Sit-stand desk",
    description:
      "Motorized legs from a commercial desk with a DIY Acacia butcher block desktop.",
    categories: ["hardware"],
  },
  {
    name: "Orion",
    description:
      "Privacy & security focused browser from Kagi, the makers of Kagi search. Based on Safari.",
    url: "https://kagi.com/orion",
    categories: ["software & services"],
    platforms: ["macOS"],
    tags: ["browsers"],
    fav: 4,
  },
  {
    name: "Vivaldi",
    description:
      "Chromium based browser with lots of privacy and security options, and some nice extra features, like Tab stacking & tiling. This is my primary browser.",
    url: "https://vivaldi.com",
    categories: ["software & services", "defaults", "day job"],
    platforms: ["macOS", "Windows"],
    tags: ["browsers", "work"],
    fav: 4,
    // oss: 'https://vivaldi.com/source/',
  },
  {
    name: "Mozilla Firefox",
    url: "https://getfirefox.com",
    oss: true,
    categories: ["software & services", "defaults", "day job"],
    platforms: ["macOS", "Windows", "iOS"],
    tags: ["browsers"],
  },
  {
    name: "DuckDuckGo Browser",
    url: "https://duckduckgo.com/app",
    oss: true,
    categories: ["software & services", "defaults"],
    platforms: ["macOS", "iOS"],
    tags: ["browsers"],
    fav: 4,
  },
  {
    name: "uBlock Origin",
    url: "https://github.com/gorhill/uBlock",
    oss: true,
    description: "Ad blocker & page node disappearer.",
    categories: ["software & services", "defaults"],
    platforms: ["web"],
    tags: ["browsers", "extensions"],
    fav: 5,
  },
  {
    name: "DuckDuckGo Privacy Essentials",
    description:
      "Burner email addresses, Cookie blocking/cleaning, and other privacy stuff.",
    url: "https://github.com/duckduckgo/duckduckgo-privacy-extension",
    oss: true,
    categories: ["software & services", "defaults"],
    platforms: ["web"],
    tags: ["browsers", "extensions"],
    fav: 5,
  },
  {
    name: "Violent Monkey",
    description: "Run custom User Scripts on any webpage.",
    url: "https://github.com/violentmonkey/violentmonkey",
    oss: true,
    categories: ["software & services", "defaults"],
    platforms: ["web"],
    tags: ["browsers", "extensions"],
    fav: 5,
  },
  {
    name: "Stylus",
    url: "https://github.com/openstyles/stylus",
    oss: true,
    description: "Apply custom Userstyles to any webpage.",
    categories: ["software & services", "defaults"],
    platforms: ["web"],
    tags: ["browsers", "extensions"],
    fav: 5,
  },
  {
    name: "Dark Reader",
    description: "Because not all websites implement a dark-mode.",
    url: "https://github.com/darkreader/darkreader",
    oss: true,
    categories: ["software & services", "defaults"],
    platforms: ["web"],
    tags: ["browsers", "extensions"],
    fav: 4,
  },
  {
    name: "Bitwarden",
    url: "https://bitwarden.com/download/",
    oss: true,
    description:
      "Encrypted password manager, 2fa token manager, and browser extension; my primary 2fa manager.",
    categories: ["software & services", "defaults", "day job"],
    tags: ["browsers", "security", "extenions"],
  },
  {
    name: "DuckDuckGo Search",
    url: "https://duckduckgo.com",
    platforms: ["macOS", "iOS", "Windows"],
    categories: ["defaults", "software & services"],
    tags: ["search"],
    fav: 4,
  },
  {
    name: "2FAS",
    oss: true,
    url: "https://2fas.com/",
    description:
      "Multi-factor auth token manager and browser extension; my secondary 2fa manager.",
    categories: ["software & services"],
    platforms: ["macOS", "iOS", "Windows"],
    tags: ["browsers", "extensions"],
  },
  {
    name: "Discord",
    url: "https://discord.com",
    fav: 2,
    description:
      "Not my preferred chat platform for various privacy concerns, but it's what my friend group uses and I've yet to move them to an alternative, nor run Matterbridge to use another client 🤷.",
    platforms: ["web"],
    categories: ["software & services"],
    tags: ["chat", "messaging"],
  },
  {
    name: "Signal",
    url: "https://github.com/signalapp",
    oss: true,
    fav: 3,
    platforms: ["macOS", "iOS"],
    categories: ["software & services"],
    tags: ["chat", "messaging"],
  },
  ...["Designer", "Photo", "Publisher"].map(
    (prod) =>
      ({
        name: `Affinity ${prod} 2`,
        url: `https://affinity.serif.com/en-us/${prod.toLowerCase()}/`,
        categories: ["software & services"],
        platforms: ["macOS"],
        tags: ["design"],
      }) as IUses,
  ),
  {
    name: "VSCodium",
    oss: true,
    url: "https://vscodium.com",
    description:
      "<abbr title='Visual Studio Code'>VSCode</abbr> without the telemetry and tracking.",
    platforms: ["macOS", "Windows", "Unix/Linux"],
    categories: ["software & services"],
    tags: ["IDE", "dev"],
  },
  {
    name: "Zed",
    oss: true,
    url: "https://github.com/zed-industries/zed",
    description:
      "An editor/IDE that sits somewhere between VSCode and *vim. It's a nice app, but young and still lacking some key features I use.",
    platforms: ["macOS"],
    categories: ["software & services"],
    tags: ["IDE", "dev"],
  },
  {
    name: "Raycast",
    url: "https://raycast.com",
    description: "Keyboard launcher. Like Quicksliver or Alfred on steroids.",
    platforms: ["macOS"],
    categories: ["software & services", "defaults"],
    tags: ["productivity", "launcher", "tools"],
  },
  {
    name: "Peloton App",
    url: "https://www.onepeloton.com/app",
    description: "Yeah. We drank the Koolaid.",
    platforms: ["iOS"],
    categories: ["software & services"],
    tags: ["running", "biking", "fitness"],
  },
  {
    name: "Peloton Bike+",
    url: "https://www.onepeloton.com/bike-plus",
    categories: ["hardware"],
    tags: ["fitness", "biking"],
  },
  {
    name: "Peloton Tread",
    url: "https://www.onepeloton.com/tread",
    // description: "The Cadillac of treadmills",
    categories: ["hardware"],
    tags: ["fitness", "running"],
  },
  {
    name: "Gasmask",
    description: "Hosts file editor/manager",
    url: "https://github.com/2ndalpha/gasmask",
    oss: true,
    platforms: ["macOS"],
    categories: ["software & services"],
    tags: ["networking", "security", "privacy"],
  },
];
