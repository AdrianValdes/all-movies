import { helpFetchMoviesOrPeople } from '../helpers';

export const fetchPeopleAction = (peopleUrl) => async (dispatch) => {
  try {
    const response = await helpFetchMoviesOrPeople(peopleUrl);
    dispatch({
      type: 'FETCH_PEOPLE',
      payload: response,
    });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR_MOVIES', payload: error });
  }
};

/* export const clearPeopleStore = () => ({ type: 'CLEAR_PEOPLE', payload: null }); */
