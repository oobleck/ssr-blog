export type TCategory = "Life" | "Work" | "Project" | "School";

export interface IEvent {
  title: string;
  description?: string;
  location?: string;
  start: string | Date;
  end?: string | Date;
  categories: TCategory[];
  milestone?: boolean;
}

export const TIMELINE: IEvent[] = [
  {
    title: "Day One 👩‍🍼",
    location: "Los Altos, CA",
    start: "5/6/1978",
    categories: ["Life"],
    // milestone: true,
  },
  {
    title: "Got my first guitar for Christmas 🎸",
    description: "A red Kramer strat-o-clone",
    categories: ["Life"],
    start: "12/25/1990",
    location: "Meridian, ID",
    milestone: true,
  },
  {
    title: "Attended Los Altos High School",
    start: "9/12/1992",
    end: "6/15/1996",
    location: "Los Altos, CA",
    categories: ["School"],
  },
  {
    title: "Met the future Mrs. Rhodes 👸",
    location: "Sunnyvale, CA",
    categories: ["Life"],
    start: "9/12/2014",
    milestone: true,
  },
  {
    title: "Married the LOML 💍",
    description: "She instisted she marry me in my 30s 😝",
    location: "Palauea Beach, Maui, HI",
    start: "4/18/2018",
    // end: Date.now(),
    categories: ["Life"],
    milestone: true,
  },
  // {
  //   title: "Spring break in Baja California",
  //   location: "Ensenada, Mexico",
  //   start: "2001-04-01",
  //   categories: ["Life"],
  // },
  {
    title:
      "BA in Product Design at <a href='https://design.sfsu.edu/' target='_blank' rel='nofollow noopener'>San Francisco State University</a>",
    location: "San Francisco, CA",
    start: "1/15/2004",
    end: "8/1/2006",
    categories: ["School"],
  },
  {
    title:
      "Worked as a Model Maker at <a href='https://web.archive.org/web/20120825003714/http://www.architecturalmodelsinc.com:80/' target='_blank' rel='noopener nofollow'>Architectural Models Inc.</a>",
    location: "Oakland, CA",
    start: "9/1/2006",
    end: "9/1/2008",
    categories: ["Work"],
  },
  {
    title: "Weathered the storm in the 2008 crash",
    categories: ["Life"],
    start: "9/1/2008",
    end: "2/14/2010",
    location: "Millbrae, CA & San Jose, CA",
  },
  {
    title:
      "Returned to my web dev career at digital agency <a href='https://web.archive.org/web/20140518124552/http://www.solutionset.com/' target='_blank' rel='noopener nofollow'>SolutionSet</a>",
    categories: ["Life"],
    start: "2/14/2010",
    end: "2/15/2014",
    location: "Palo Alto, CA",
  },
  {
    title: "Moved into my first apartment on my own",
    categories: ["Life"],
    start: "4/15/2010",
    end: "4/28/2011",
    location: "Belmont, CA",
    milestone: true,
  },
  {
    title: "Bought my first car",
    description: 'A white 1987 Honda Accord named "Oblivion"',
    categories: ["Life"],
    location: "Los Altos, CA",
    start: "6/1/1996",
    milestone: true,
  },
  {
    title: "Car 👉 Pickup truck",
    description:
      'Traded in "Oblivion" for a white 1996 Chevy S-10 named "The Rabbi Ezekiel, minus the Rabbi"',
    categories: ["Life"],
    start: "6/1/1998",
    end: "4/13/2009",
  },
  {
    title: "Start work as frontend developer at FriendFinder",
    categories: ["Work"],
    location: "Palo Alto, CA",
    start: "2/1/2001",
    end: "10/11/2002",
  },
  {
    title:
      "<a href='https://burningman.org/about/history/brc-history/event-archives/2001-2/' target='_blank' rel='noopener nofollow'>Burning Man!</a>",
    categories: ["Life"],
    start: "8/27/2001",
    location: "Black Rock City, NV",
  },
  {
    title: "Studied 3 mo. in Spain 🇪🇸",
    start: "10/1/2002",
    end: "12/23/2002",
    categories: ["School"],
    milestone: true,
  },
  {
    title: "COVID blows everything up for years 😷",
    location: "Earth",
    categories: ["Life", "Work"],
    start: "March 2020",
    milestone: true,
  },
  {
    title: "Start working at Open Text (fka. Micro Focus)",
    location: "Virtual",
    categories: ["Work"],
    start: "5/6/2020",
  },
  {
    title: "Bring home <a href='/puppies#luna-wren'>Luna Wren</a> 🦮",
    location: "Lathrope, CA",
    categories: ["Life"],
    start: "9/16/2021",
    milestone: true,
  },
  {
    title: "RIP <a href='/puppies#sadie-mae'>Sadie Mae</a> @ 13 y/o 🪦",
    location: "San Jose, CA",
    categories: ["Life"],
    start: "10/26/2021",
  },
  {
    title: "Bring home <a href='/puppies#millie-maxwell'>Millie Maxwell</a> 🦮",
    location: "Sacramento, CA",
    categories: ["Life"],
    start: "11/20/2021",
    milestone: true,
  },
  {
    title: "Bring home <a href='/puppies#sawyer-branch'>Sawyer Branch</a> 🦮",
    location: "San Jose, CA",
    categories: ["Life"],
    start: "5/27/2022",
    milestone: true,
  },
  {
    title: "Bring home <a href='/puppies#ada-everest'>Ada Everest</a> 🦮",
    location: "Freemont, CA",
    categories: ["Life"],
    start: "Sept 2024",
    milestone: true,
  },
  {
    title:
      "Bring home <a href='/puppies#finneas-archwell'>Finneas Archwell</a> 🐈",
    location: "San Jose, CA",
    categories: ["Life"],
    start: "10/10/2024",
    milestone: true,
  },
  {
    title:
      "Bring home Finn's sister, <a href='/puppies#fernie-maddox'>Fernie Maddox</a> 🐈",
    location: "San Jose, CA",
    categories: ["Life"],
    start: "10/20/2024",
    milestone: true,
  },
  {
    title:
      "Started working at <a href='https://www.badgermeter.com/' target='_blank' rel='nofollow noopener'>Badger Meter, Inc.</a>",
    categories: ["Work"],
    start: "Feb 2014",
    end: "Jul 2015",
    location: "Los Gatos, CA",
  },
  {
    title:
      "Started working at <a href='https://www.cohesity.com' target='_blank' rel='nofollow noopener'>Cohesity</a>",
    categories: ["Work"],
    start: "Jul 2015",
    end: "Apr 2020",
    location: "San Jose, CA",
  },
];

export const timelineSorter = (a: IEvent, b: IEvent) => {
  return new Date(a.start).getTime() - new Date(b.start).getTime();
};
