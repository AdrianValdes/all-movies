import axios from 'axios';

export const helpFetchMovies = async (url) => {
  const { data } = await axios.get(url);
  return data.results;
};
