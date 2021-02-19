export const getGenresString = (genres = []) =>
  genres?.map((genre) => genre.name).join(', ');
