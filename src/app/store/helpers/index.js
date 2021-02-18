import axios from 'axios';

export const helpFetchMoviesOrPeople = async (url) => {
  const { data } = await axios.get(url);
  return data.results;
};
