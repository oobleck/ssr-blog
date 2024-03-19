import { type CollectionEntry } from 'astro:content';
type PostEntry = CollectionEntry<'blog'>;

/**
 * Sorts posts by the most recent date in each post.
 *
 * @example
 *   PostA was posted yesterday
 *   PostB was posted 10 days ago, but updated today.
 *   PostB will be sorted head of PostA
 * @returns Array#sort function.
 */
export const postsSorter = () => {
  return (postA: PostEntry, postB: PostEntry) => {
    // These 2 funky assignments collect the most recent date of each post into
    // `updatedN` for comparison when no updates are made, or when one post as a
    // more recent update than the previous post was posted.
    const {data: {pubDate: postedA, updatedDate: updatedA = postedA}} = postA;
    const {data: {pubDate: postedB, updatedDate: updatedB = postedB}} = postB;
    return updatedB.valueOf() - updatedA.valueOf();
  };
}