import allGenres from '../urls/genres.json';

export const buildGenresQuery = () =>
  allGenres.reduce((acc, curr) => {
    if (curr.selected) {
      acc.push(curr.id);
    }
    return acc;
  }, []);
