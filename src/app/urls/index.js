export const KEY = process.env.REACT_APP_KEY;

export const genres =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=009f9976a57d0b92e9dee06122c5b4bc&language=en-US';

export const comediesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=35&page=1`;
export const popularUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
export const animationUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=16&page=1`;
