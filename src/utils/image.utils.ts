import { pexelsCredit, pexelsUrl } from "./pexels.utils";
import { unsplashCredit, unsplashUrl } from "./unsplash.utils";

export const remoteImageUrl = (id: string): string | void => {
  const [type, remoteId] = id.split(':');
  switch (type) {
    case 'un':
      return unsplashUrl(remoteId);

    case 'px':
      return pexelsUrl(remoteId);
  }

  return void 0;
}

export const remoteImageCredit = (id: string): string | void => {
  const [type, remoteId] = id.split(':');
  switch (type) {
    case 'un':
      return unsplashCredit(remoteId);

    case 'px':
      return pexelsCredit(remoteId);
  }

  return void 0;
}