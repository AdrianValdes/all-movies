import React, { useEffect, useRef, useState } from 'react';
import { useFetchMoviesOrPeople } from '../../app/hooks';

import { GridCard } from './GridCard';
import {
  handleIntersectionObserver,
  MoviesGridContainer,
  MoviesGrid,
} from '../../app/shared';
import { Spinner } from '../../app/shared/components/Spiner';

export const GenreRoute = ({ location }) => {
  const [comingUrl, setComingUrl] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { genreUrl } = location.state;
  if (genreUrl !== comingUrl) {
    setComingUrl(genreUrl);
  }

  const { dataApi, loadingApi, errorAPi, hasMore } = useFetchMoviesOrPeople(
    comingUrl,
    genreUrl,
    pageNumber
  );

  const observer = useRef();
  const lastItem = useRef();

  useEffect(() => {
    handleIntersectionObserver({
      loadingApi,
      setPageNumber,
      hasMore,
      observer,
      lastItem,
    });
    return observer.unobserve;
  }, [loadingApi, hasMore]);

  if (loadingApi) return <Spinner />;
  if (errorAPi) return <p>Error: {errorAPi}</p>;
  return (
    <div>
      <MoviesGridContainer>
        <MoviesGrid>
          {dataApi &&
            dataApi.map((movie) => <GridCard key={movie.id} movie={movie} />)}
          <div ref={lastItem} />
        </MoviesGrid>
      </MoviesGridContainer>
    </div>
  );
};
