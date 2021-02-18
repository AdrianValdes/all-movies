const baseStringCount = 99;
export const buildFiltersQuery = ({ genreUrl, sort, score, language }) =>
  `${genreUrl.slice(0, baseStringCount)}&${sort}&${score}&language=${language}`;
