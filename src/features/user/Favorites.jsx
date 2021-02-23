import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MovieCardSearch } from '../search/MovieCardSearch';

const SearchContent = styled.div`
  max-width: 1100px;
`;

export const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);

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
