import imageUrlBuilder from '@sanity/image-url';
import { client } from '../lib/sanity';

export const useSanityImage = () => {
  const builder = imageUrlBuilder(client);

  const urlFor = (source: string) => {
    return builder.image(source);
  };

  return urlFor;
};