export const buildGenresQuery = (allGenres) =>
  allGenres.reduce((acc, curr) => {
    if (curr.selected) {
      acc.push(curr.id);
    }
    return acc;
  }, []);
