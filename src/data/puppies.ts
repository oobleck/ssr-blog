export interface IPuppy {
  name: string;
  species: "feline" | "canine";
  born: string | Date;
  deceased?: string | Date;
  breed: string;
  weight: number;
  chipId?: number | string;
  chipUrl?: string;
  gender: "male" | "female";
  images?: string[];
  nicknames?: string[];
  favorites?: {
    activity?: string;
  };
}

export const petSorter = (a: IPuppy, b: IPuppy) => {
  const dateA = new Date(a.deceased || a.born);
  const dateB = new Date(b.deceased || b.born);

  if (b.deceased) {
    return -1;
  }

  return Math.abs(dateB.getTime() - dateA.getTime());
};

export const puppies: IPuppy[] = [
  {
    species: "feline",
    name: "Jackson Wyatt",
    born: "1/20/2009",
    deceased: "10/2/2024",
    breed: "American short-hair",
    weight: 10,
    gender: "male",
    images: [],
    nicknames: ["Bubby", "Jax", "Punk"],
    favorites: {
      activity: "Growling and sleeping",
    },
  },
  {
    species: "feline",
    name: "Eleanor Avery",
    born: "2014",
    breed: "American short-hair",
    weight: 15,
    gender: "female",
    images: [],
    nicknames: ["Ellie Belly", "Ellie", "Boom Boom", "Chubbygirlfoodfoodkiss"],
    favorites: {
      activity: "Eating",
    },
  },
  {
    species: "canine",
    name: "Sadie Mae",
    born: "10/27/2009",
    deceased: "10/26/2021",
    weight: 80,
    gender: "female",
    breed: "Chocolate Labrador Retriever",
    images: [],
    nicknames: ["Mae", "Mazie Cakes", "Brown Bear", "Pony"],
    chipId: 1,
    favorites: {
      activity: "Eating and Sleeping",
    },
  },
  {
    species: "canine",
    name: "Luna Wren",
    born: "7/5/2021",
    breed: "Goldendoodle",
    weight: 65,
    gender: "female",
    chipId: -1,
    images: [
      "images/luna-wren1.jpg",
      "images/luna-wren2.jpg",
      "images/luna-wren3.jpg",
      "images/luna-day1.jpg",
    ],
    nicknames: ["Wrennie", "Renny Rockets", "Beans", "Lunatic"],
    favorites: {
      activity: "Playing fetch",
    },
  },
  {
    species: "canine",
    name: "Millie Maxwell",
    born: "9/27/2021",
    breed: "Chocolate Labrador Retriever",
    weight: 72,
    chipId: -1,
    gender: "female",
    nicknames: ["Mildred", "Moose", "Moosolini"],
    images: [
      "images/millie-maxwell3.jpg",
      "images/millie-maxwell2.jpg",
      "images/millie-maxwell1.jpg",
      "images/millie-day1.jpg",
    ],
    favorites: {
      activity: "Eating and barking",
    },
  },
  {
    species: "canine",
    name: "Sawyer Branch",
    born: "3/10/2022",
    breed: "Goldendoodle",
    weight: 74,
    chipId: -1,
    gender: "male",
    nicknames: ["So-so", "Brodie Wampus", "Beefcake", "Homie"],
    images: [
      "images/sawyer-branch1.jpg",
      "images/sawyer-branch2.jpg",
      "images/sawyer-branch3.jpg",
      "images/sawyer-day1.jpg",
    ],
    favorites: {
      activity: "Cuddling and playing fetch",
    },
  },
  {
    species: "canine",
    name: "Ada Everest",
    born: "6/22/2023",
    breed: "Chocolate Labrador Retriever",
    weight: 80,
    chipId: 1,
    gender: "female",
    nicknames: ["Pipps", "Pippy", "Sh*thead"],
    images: [
      "images/ada-everest1.jpg",
      "images/ada-everest3.jpg",
      "images/ada-everest2.jpg",
      "images/ada-day1.jpg",
    ],
    favorites: {
      activity: "Trying to kill her sister Millie, biting chins, and TURBO mode!",
    },
  },
  {
    species: "feline",
    name: "Finneas Archwell",
    born: "7/11/2024",
    breed: "Flame Point Siamese",
    weight: 5.5,
    chipId: 1,
    gender: "male",
    nicknames: ["Finn", "Finny", "Finneas Longus", "Finny Logins"],
    images: [],
    favorites: {
      activity: "Scrapping with Fernie and thundering down the hall",
    },
  },
  {
    species: "feline",
    name: "Fernie Maddox",
    born: "7/11/2024",
    breed: "Lilac Point Siamese",
    weight: 4.6,
    chipId: 1,
    gender: "female",
    nicknames: ["Fernius", "Fernie Little"],
    images: [],
    favorites: {
      activity: "Scrapping with Finn and thundering down the hall",
    },
  },
];
