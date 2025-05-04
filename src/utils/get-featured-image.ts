import { type ZImage } from 'content.config';

export function getFeaturedImage(images: ZImage[] = []): ZImage['image'] | void {
  return images?.find?.((image) => image.featured)?.image ?? images?.[0]?.image;
}
