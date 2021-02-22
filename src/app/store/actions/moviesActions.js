import { animationUrl, comediesUrl, popularUrl, actionUrl } from '../../shared';
import { helpFetchMoviesOrPeople } from '../helpers';

export const fetchComediesAction = () => async (dispatch) => {
  try {
    const response = await helpFetchMoviesOrPeople(comediesUrl);
    dispatch({
      type: 'FETCH_COMEDIES',
      payload: response,
    });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR_MOVIES', payload: error });
  }
};

export const fetchAnimationsAction = () => async (dispatch) => {
  try {
    const response = await helpFetchMoviesOrPeople(animationUrl);
    dispatch({
      type: 'FETCH_ANIMATION',
      payload: response,
    });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR_MOVIES', payload: error });
  }
};

export const fetchPopularsAction = () => async (dispatch) => {
  try {
    const response = await helpFetchMoviesOrPeople(popularUrl);
    dispatch({
      type: 'FETCH_POPULAR',
      payload: response,
    });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR_MOVIES', payload: error });
  }
};

export const fetchActionsAction = () => async (dispatch) => {
  try {
    const response = await helpFetchMoviesOrPeople(actionUrl);
    dispatch({
      type: 'FETCH_ACTION',
      payload: response,
    });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR_MOVIES', payload: error });
  }
};
