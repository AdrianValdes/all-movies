const getUniqueIds = (array) => [...new Set(array.map((obj) => obj.id))];

export const prepareKnownFor = (movies) => {
  if (movies === undefined) return [];

  const tenMovies = movies.slice(0, 10);
  const ids = getUniqueIds(tenMovies);

  return ids.map((id) => tenMovies.find((movie) => movie.id === id));
};
