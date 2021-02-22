import { auth, db } from '../../../firebase';
import { SINGLE_MOVIE_BASE_URL, KEY } from '../../shared/urls';

const fetchMoviesIds = () => {
  const idsArray = [];

  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('favorites')
    .onSnapshot((querySnapshot) => {
      const tempArray = [];
      querySnapshot.forEach((movie) => {
        tempArray.push(movie.id);
      });
    });

  return idsArray;
};

const fetchAllMovies = async () => {
  const array = fetchMoviesIds();
  const arrayOfPromises = array.map((id) =>
    fetch(`${SINGLE_MOVIE_BASE_URL}/${id}?api_key=${KEY}&append_to_response`)
  );
  const arrayOfResults = await Promise.all(arrayOfPromises);
  const arrayOfData = await Promise.all(
    arrayOfResults.map((response) => response.json())
  );

  return arrayOfData;
};

export const fetchFavorites = () => async (dispatch) => {
  if (auth?.currentUser?.uid) {
    const movies = await fetchAllMovies();
    try {
      dispatch({ type: 'FETCH_FAVORITES', payload: movies });
    } catch (error) {
      dispatch({ type: 'FETCH_FAVORITES_ERROR', payload: error });
    }
  }
};
