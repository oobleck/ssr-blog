export const pexelsUrl = (id: string | number): string | void => {
  // https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
  return id ? `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2` : void 0;
};

export const pexelsCredit = (id: string | undefined): string | void => {
  return id ? `https://www.pexels.com/photo/${id}` : void 0;
};
