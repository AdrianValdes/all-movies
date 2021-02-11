import { animationUrl, comediesUrl, popularUrl } from '../../urls';
import { helpFetchMovies } from '../helpers';

export const fetchComediesAction = () => async (dispatch) => {
  const response = await helpFetchMovies(comediesUrl);
  dispatch({
    type: 'FETCH_COMEDIES',
    payload: response,
  });
};

export const fetchAnimationsAction = () => async (dispatch) => {
  const response = await helpFetchMovies(animationUrl);

  dispatch({
    type: 'FETCH_ANIMATION',
    payload: response,
  });
};

export const fetchPopularsAction = () => async (dispatch) => {
  const response = await helpFetchMovies(popularUrl);

  dispatch({
    type: 'FETCH_POPULAR',
    payload: response,
  });
};
