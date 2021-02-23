import { auth, db } from '../../../firebase';
import { SINGLE_MOVIE_BASE_URL, KEY } from '../../shared/urls';

const fetchMovies = async (array) => {
  const arrayOfPromises = array.map((id) =>
    fetch(`${SINGLE_MOVIE_BASE_URL}/${id}?api_key=${KEY}`)
  );
  const arrayOfResults = await Promise.all(arrayOfPromises);
  const arrayOfData = await Promise.all(
    arrayOfResults.map((response) => response.json())
  );

  return arrayOfData;
};

export const fetchFavoritesMovies = () => async (dispatch) => {
  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('favorites')
    .onSnapshot(async (querySnapshot) => {
      const tempArray = [];
      querySnapshot.forEach((movie) => {
        tempArray.push(movie.id);
      });
      const movies = await fetchMovies(tempArray);
      dispatch({ type: 'FETCH_FAVORITES', payload: movies });
    });
};
