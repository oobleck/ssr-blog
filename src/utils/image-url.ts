import { type ImageMetadata } from "astro";
import { getImage } from "astro:assets";

export async function imageUrl(src: any, opts = {}): Promise<ImageMetadata['src']> {
  const defaultOpts = { format: 'webp', width: 2000, height: 2000 };
  const source = src?.url ?? src?.src ?? src;
  if (!source || source.startsWith?.('http')) {
    return source;
  }

  const image = await getImage({ ...defaultOpts, src: source });
  // console.log(image?.src);
  return image?.src;
}
