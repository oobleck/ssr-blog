export interface IPuppy {
  name: string;
  species: 'feline' | 'canine';
  born: string;
  breed: string;
  weight: number;
  chipId?: number | string;
  chipUrl?: string;
  gender: 'male' | 'female';
  images?: string[];
  nicknames?: string[];
  favorites?: {
    activity?: string;
  };
}

export const puppies: IPuppy[] = [
  {
    species: 'feline',
    name: "Jackson Wyatt",
    born: "2009-01-20",
    breed: "American short-hair",
    weight: 10,
    gender: 'male',
    images: [],
    nicknames: ["Bubby", "Jax", "Punk"],
    favorites: {
      activity: "Growling and sleeping",
    },
  },
  {
    species: 'feline',
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
    species: 'canine',
    name: "Luna Wren",
    born: "2021-07-06",
    breed: "Goldendoodle",
    weight: 72,
    gender: 'female',
    chipId: -1,
    images: [
      "images/luna-wren1.jpg",
      "images/luna-wren2.jpg",
      "images/luna-wren3.jpg",
      "images/luna-day1.jpg",
    ],
    nicknames: ['Wrennie', "Renny Rockets", 'Beans', 'Lunatic'],
    favorites: {
      activity: "Playing fetch",
    },
  },
  {
    species: 'canine',
    name: "Millie Maxwell",
    born: "2021-09-28",
    breed: "Chocolate Labrador Retriever",
    weight: 80,
    chipId: -1,
    gender: 'female',
    nicknames: ['Mildred', 'Moose', 'Millie goat'],
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
    species: 'canine',
    name: "Sawyer Branch",
    born: "2022-03-11",
    breed: "Goldendoodle",
    weight: 70,
    chipId: -1,
    gender: 'male',
    nicknames: ['So-so', "Brodie Wampus", 'Beefcake', 'Homie'],
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
    species: 'canine',
    name: "Ada Everest",
    born: "2023-06-23",
    breed: "Chocolate Labrador Retriever",
    weight: 60,
    chipId: 0,
    gender: 'female',
    nicknames: ['Pipps', 'Pippy', 'Sh*thead'],
    images: [
      "images/ada-everest1.jpg",
      "images/ada-everest3.jpg",
      "images/ada-everest2.jpg",
      "images/ada-day1.jpg",
    ],
    favorites: {
      activity: "Eating, biting chins, and TURBO mode!",
    },
  }
];
