export const KEY = process.env.REACT_APP_KEY;
export const IMAGE_BASE_URL_LOW = 'https://image.tmdb.org/t/p/w185';
export const IMAGE_BASE_URL_MEDIUM = 'https://image.tmdb.org/t/p/w500';
export const IMAGE_BASE_URL_HIGH = 'https://image.tmdb.org/t/p/w1280';
export const SINGLE_MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie';

export const genres =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=009f9976a57d0b92e9dee06122c5b4bc&language=en-US';

export const popularUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;
export const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=28`;
export const animationUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=16`;
export const comediesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=35`;
export const documentaryUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=99`;
export const dramaUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=18`;
export const horrorUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=27`;
export const romanceUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=10749`;
const urLSingleMovieWithAll = `${SINGLE_MOVIE_BASE_URL}/$<id>?api_key=${KEY}&append_to_response=videos,credits,similar_movies,recommendations,release_dates`;

const urlSingleMovieWithVideoAndCredits = `${SINGLE_MOVIE_BASE_URL}/$<id>?api_key=${KEY}&append_to_response=videos,credits`;
