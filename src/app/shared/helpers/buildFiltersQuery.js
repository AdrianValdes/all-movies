/* eslint-disable no-param-reassign */

export const buildFiltersQuery = ({
  genreUrl,
  sort,
  score,
  language,
  original_language,
  queryGenres,
}) => {
  const genresQuery =
    queryGenres.length > 0 ? `&with_genres=${queryGenres.join(',')}` : '';
  return `${genreUrl}&${sort}&${score}&language=${language}&with_original_language=${original_language}${genresQuery}`;
};
