export type TInterestCategory =
  | 'currently'
  | 'tech'
  | 'music'
  | 'diy'
  | 'design'
  | 'food';
export interface IInterest {
  title: string;
  description: string;
  categories: TInterestCategory[];
  links?: string[];
}

export const interestsSorter = (a: IInterest, b: IInterest) => {
  return a.categories?.includes('currently')
    ? -1
    : a.title.localeCompare(b.title);
};

export const INTERESTS: IInterest[] = [
  {
    categories: ['diy', 'currently'],
    title: 'Medieval costuming',
    description: `I recently returned to the Game of Thrones series on HBO after 10+ years away and finished the series. I had stopped because my watch party fell apart and I reached the point in the show where the books stopped. I am inspired by the production and wardrobe design.

    True to my character, I've been obsessing over medieval clothing. I've been researching the names of the articles, their purpose, and general use and construction. My intent is to pull together a costume for a character in that universe, though not one with a name. Yes, I have gone to Ren Faire and have been inspired by the costumes there too.

    I'm percolating the idea of a costume that's lightweight because dang that stuff can get hot. How can I fake Brigandine armor?

    I swear, I should have gone into theater.`,
  },
  {
    categories: ['design', 'diy'],
    title: '"Ex-libris" bookplates',
    description: `"Ex Libris" means "From the books of..." in Latin. Or in modern vernacular: "From the library of...".

I can't explain why I'm so taken with <a href="https://www.exlibris-art.com" target="_blank" rel="nofollow noppener">Bookplates</a> lately. Perhaps it's my attraction to things arcane. I find them utterly fascinating. They are tiny business card sized pieces of artwork specific to the book's owner. I'm inspired by them to the point of designing several for use in my own library, and perhaps for selling on Etsy or somewhere. If you know anyting about me, you'll understand why my designs are also <a href='https://psychology-spot.com/memento-mori-meaning-origin/' target='_blank' rel='nofollow noopener'>Memento Mori</a>.`,
  },
  {
    title: '👨‍💻 Wev Dev',
    description: `I've been doing web development since the mid 1990s in high school, with a brief break during university when I explored industrial design. Oh, who am I kidding? I was doing web dev even then. I've been passionately following the developments of features like <a href="https://www.w3.org/Style/CSS20/history.html" target='_blank' rel='nofollow noopener'>CSS</a> and <a href="https://wikiless.tiekoetter.com/wiki/JavaScript#History" target='_blank' rel='nofollow noopener'>JavaScript</a>. These technologies are never far from my mind. I'm almost always processing some idea or technique in the back of my head.`,
    categories: ['tech'],
  },
  {
    title: '🎸 Guitar',
    description: `I've been playing guitar now for about 34 years. I was obsessed with playing all through high school, but it has become a hobby since then.

I've owned many guitars over this time, and have about 10 on hand now.

I'm primarily into <a href='https://www.pandora.com/genre/death-metal/GE:1103' target='_blank' rel='nofollow noopener'>Death Metal</a> 🤘, but my style and tastes vary greatly. I played in a funk/surf/reggae band in college. I'm a decent lead guitarist, but am no metal shredder these days. I can do some simple 3 string swept arpeggios, but that's about it. <a href='https://www.pandora.com/artist/yngwie-malmsteen/ARvwnKVZc44mpZX' target='_blank' rel='noopener nofollow'>Yngwie Malmsteen</a> anyone 😜?`,
    categories: ['music'],
  },
  {
    title: '🎧 Listening',
    description: `Lately I've been listening to a lot of <a href='https://www.pandora.com/genre/synthwave/GE:1420' target='_blank' rel='noopener nofollow'>Synthwave</a> music while working. I find the energy of it, and the caress of nostalgia for my childhood in the 1980s is very motivating.

I'm also listening to a lot of Lord Huron (<a href='https://www.pandora.com/station/90968096671551071' target='_blank' rel='noopener nofollow'>Lord Huron radio on Pandora</a> is great) and <a href='https://www.pandora.com/artist/khruangbin/ARm5fjhjqr6V47P' target='_blank' rel='nofollow noopener'>Khruangbin</a>. The Wife and I have been to see Lord Huron live twice now: once at the Greek Theater in Berkeley, CA; and once at Mountain Winery in Saratoga, CA. Awesome show.

We received a vintage Technics turntable from my in-laws for Christmas in 2024 and have been enjoying hunting down the odd record. To date we have Frank Sinatra, Bing Crosby, Ella Fitzgerald, Taylor Swift, Khruangbin, and some other random vintage stuff found at our local Streetlight Records.`,
    categories: ['music'],
  },
  {
    title: '🪜 Home Improvements',
    categories: ['diy'],
    description: `This is kind of vague as my interests are broad in this topic. But to narrow it down a bit, The Wife and I have been slowly nudging our late-mid-century home (built in 1976) more to the mid-century. My last project of 2024 was to re-home 16 feet of finished Mahogany panelling salvaged from a neighboring <a herf='https://www.zillow.com/homedetails/1659-Andalusia-Way-San-Jose-CA-95125/19692397_zpid/' target='_blank' rel='noopener nofollow'>1960 Eichler home</a> that was flipped. Nay, ruined. Way cooler than buying and finishing new Mahogany panels.

We also love the hunt for vintage furniture and lighting. We have salvaged at least 4 large pieces from the curb. One was <a href=\"/works/nils-jonsson-credenza\">broken to pieces near a dumpster</a> at our local Starbucks. Thankfuly, all its pieces and splinters were present and accounted for and I was able to re-assemble and restore it's finish. It's a gorgeous Teak wood credenza.`,
  },
  {
    categories: ['food'],
    title: '🍕 Pizza',
    description: `In the Fall of 2023, I was gifted an Ooni Koda 16 pizza oven by a friend (thanks Aaron!). During the warmer months I have enjoyed making home made Napoli style pizzas.

I was having a rough time with the dough and learned a lot in the process of honing my pizzaiolo skills. I'm way more comfortable with bread dough now because of this.`,
  },
];
