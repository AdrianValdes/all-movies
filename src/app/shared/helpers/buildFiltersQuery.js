/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { popularUrl, showsUrl } from '../urls';

const baseStringCount = 99;

export const buildFiltersQuery = ({
  genreUrl,
  sort,
  score,
  language,
  original_language,
}) =>
  `${genreUrl}&${sort}&${score}&language=${language}&with_original_language=${original_language}`;
