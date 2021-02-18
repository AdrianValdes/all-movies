const KEY = process.env.REACT_APP_KEY;
export const getPersonUrl = (id) =>
  `https://api.themoviedb.org/3/person/${id}?api_key=${KEY}&language=en-US`;
