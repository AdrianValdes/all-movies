export const helpFetchMoviesOrPeople = async (url) => {
  const response = await fetch(url);
  const moviesOrPeople = await response.json();
  return moviesOrPeople.results;
};
