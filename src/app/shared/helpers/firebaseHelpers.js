import { db } from '../../../firebase';

export const addToFavorites = ({
  isFavorite,
  setIsFavorite,
  user,
  movieId,
}) => {
  setIsFavorite(!isFavorite);
  const updateCollection = async () => {
    if (!isFavorite) {
      await db
        .collection('users')
        .doc(user?.uid)
        .collection('favorites')
        .doc(movieId)
        .set({ id: movieId });
    } else {
      await db
        .collection('users')
        .doc(user?.uid)
        .collection('favorites')
        .doc(movieId)
        .delete();
    }
  };
  updateCollection();
};
