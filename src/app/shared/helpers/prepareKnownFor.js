<<<<<<< HEAD
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
=======
const getUniqueIds = (array) => [...new Set(array.map((obj) => obj.id))];

export const prepareKnownFor = (movies) => {
  if (movies === undefined) return [];

  const tenMovies = movies.slice(0, 10);
  const ids = getUniqueIds(tenMovies);

  return ids.map((id) => tenMovies.find((movie) => movie.id === id));
>>>>>>> add link for the cast on Movie Route
};
