export const prepareKnownFor = (movies) => {
  const seen = new Set();
  if (movies === undefined) return [];

  const tenMovies = movies.slice(0, 10);

  const filteredArray = tenMovies.filter((movie) => {
    const duplicate = seen.has(movie.id);
    seen.add(movie.id);
    return !duplicate;
  });
  return filteredArray;
};
