import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { db } from '../../firebase';
import { SINGLE_MOVIE_BASE_URL, KEY } from '../../app/shared/urls';
import { MovieCardSearch } from '../search/MovieCardSearch';

const SearchContent = styled.div`
  max-width: 1100px;
`;

export const Favorites = () => {
  const user = useSelector((state) => state.user.user);
  const [moviesIds, setMoviesIds] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user.uid)
        .collection('favorites')
        .onSnapshot((querySnapshot) => {
          const ids = [];
          querySnapshot.forEach((movie) => {
            ids.push(movie.id);
          });
          setMoviesIds([...ids]);
        });
    }
  }, [user]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const arrayOfPromises = moviesIds.map((id) =>
        fetch(
          `${SINGLE_MOVIE_BASE_URL}/${id}?api_key=${KEY}&append_to_response`
        )
      );
      const arrayOfResults = await Promise.all(arrayOfPromises);
      const arrayOfData = await Promise.all(
        arrayOfResults.map((response) => response.json())
      );

      setFavorites([...favorites, ...arrayOfData]);
    };
    fetchAllMovies();
  }, [moviesIds]);

  return (
    <main>
      <SearchContent>
        {favorites &&
          favorites.map((movie) => (
            <MovieCardSearch key={movie.id} movie={movie} />
          ))}
      </SearchContent>
    </main>
  );
};
