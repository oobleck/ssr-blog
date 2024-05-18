import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function(tree: any, { data }: { data: any }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    Object.assign(data.astro.frontmatter, {
      minutesRead: readingTime.minutes < 2 ? "1 min" : readingTime.text,
      words: readingTime.words,
    });
  };
}

