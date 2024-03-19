export const unsplashUrl = (id: string | undefined): string | void => {
  return id
    ? // https://unsplash.com/documentation#hotlinking
      `https://source.unsplash.com/${id}?auto=format`
    : void 0;
};

export const unsplashCredit = (id: string | undefined): string | void => {
  return id ? `https://unsplash.com/photos/${id}` : void 0;
};
