const baseStringCount = 99;
export const buildFiltersQuery = ({
  genreUrl,
  sort,
  score,
  language,
  original_language = 'en-US',
}) =>
  `${genreUrl.slice(
    0,
    baseStringCount
  )}&${sort}&${score}&language=${language}&with_original_language=${original_language}`;
