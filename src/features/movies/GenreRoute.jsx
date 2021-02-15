import React, { useEffect, useRef, useState } from 'react';
import { useFetchMovies } from '../../app/hooks';

import { GridCard } from './GridCard';
import {
  handleIntersectionObserver,
  MoviesGridContainer,
  MoviesGrid,
} from '../../app/shared';

export const GenreRoute = ({ location }) => {
  const [comingUrl, setUrl] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { genreUrl } = location.state;
  if (genreUrl !== comingUrl) {
    setUrl(genreUrl);
  }

  const { dataApi, loadingApi, errorAPi, hasMore } = useFetchMovies(
    comingUrl,
    genreUrl,
    pageNumber
  );

  const observer = useRef();
  const lastMovie = useRef();

  useEffect(() => {
    handleIntersectionObserver({
      loadingApi,
      setPageNumber,
      hasMore,
      observer,
      lastMovie,
    });
    return observer.unobserve;
  }, [loadingApi, hasMore]);

  if (loadingApi) return <p>Loading...</p>;
  if (errorAPi) return <p>Error: {errorAPi}</p>;
  return (
    <div>
      <MoviesGridContainer>
        <MoviesGrid>
          {dataApi &&
            dataApi.map((movie) => <GridCard key={movie.id} movie={movie} />)}
          <div ref={lastMovie} />
        </MoviesGrid>
      </MoviesGridContainer>
    </div>
  );
};
