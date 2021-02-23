const KEY = process.env.REACT_APP_KEY;
export const pickGenre = (genreNumber) =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genreNumber}`;
