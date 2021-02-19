import { SINGLE_MOVIE_BASE_URL, SINGLE_SHOW_BASE_URL, KEY } from '../urls';

export function pickShowOrMovie({ pathname, id, language = 'language=en-US' }) {
  return pathname.includes('movie')
    ? `${SINGLE_MOVIE_BASE_URL}/${id}?api_key=${KEY}&append_to_response=videos,credits,recommendations,release_dates,reviews,keywords&${language}`
    : `${SINGLE_SHOW_BASE_URL}/${id}?api_key=${KEY}&append_to_response=videos,credits,recommendations,release_dates,reviews,keywords&${language}`;
}
