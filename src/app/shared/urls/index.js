import { pickGenre } from '../helpers';

export const KEY = process.env.REACT_APP_KEY;
export const IMAGE_BASE_URL_LOW = 'https://image.tmdb.org/t/p/w185';
export const IMAGE_BASE_URL_MEDIUM = 'https://image.tmdb.org/t/p/w500';
export const IMAGE_BASE_URL_HIGH = 'https://image.tmdb.org/t/p/w1280';
export const SINGLE_MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie';

export const actionUrl = pickGenre(28);
export const animationUrl = pickGenre(16);
export const comediesUrl = pickGenre(35);
export const documentaryUrl = pickGenre(99);
export const dramaUrl = pickGenre(18);
export const horrorUrl = pickGenre(27);
export const romanceUrl = pickGenre(10749);
export const popularUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc`;

const urLSingleMovieWithAll = `${SINGLE_MOVIE_BASE_URL}/$<id>?api_key=${KEY}&append_to_response=videos,credits,similar_movies,recommendations,release_dates,keywords`;
const urlQueryMovies = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=<Movie>`;
export const urlMultiQuery = `https://api.themoviedb.org/3/search/multi?api_key=${KEY}&query=`;
