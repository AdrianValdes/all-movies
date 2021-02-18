import { animationUrl, comediesUrl, popularUrl, actionUrl } from '../../shared';
import { helpFetchMovies } from '../helpers';

export const fetchComediesAction = () => async (dispatch) => {
  try {
    const response = await helpFetchMovies(comediesUrl);
    dispatch({
      type: 'FETCH_COMEDIES',
      payload: response,
    });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', payload: error });
  }
};

export const fetchAnimationsAction = () => async (dispatch) => {
  try {
    const response = await helpFetchMovies(animationUrl);
    dispatch({
      type: 'FETCH_ANIMATION',
      payload: response,
    });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', payload: error });
  }
};

export const fetchPopularsAction = () => async (dispatch) => {
  try {
    const response = await helpFetchMovies(popularUrl);
    dispatch({
      type: 'FETCH_POPULAR',
      payload: response,
    });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', payload: error });
  }
};
export const fetchActionsAction = () => async (dispatch) => {
  try {
    const response = await helpFetchMovies(actionUrl);
    dispatch({
      type: 'FETCH_ACTION',
      payload: response,
    });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', payload: error });
  }
};
