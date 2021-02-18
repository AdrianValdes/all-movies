export const KEY = process.env.REACT_APP_KEY;
export const pickGenre = (genreNumber) =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genreNumber}`;

const genres =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=009f9976a57d0b92e9dee06122c5b4bc&language=en-US';
