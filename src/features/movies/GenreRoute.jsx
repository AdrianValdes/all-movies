import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useFetchMovies } from '../../app/hooks';

import { GridCard } from './GridCard';
import {
  handleIntersectionObserver,
  MoviesGridContainer,
  MoviesGrid,
} from '../../app/shared';
import { Spinner } from '../../app/shared/components/Spiner';
import { GenreForm } from './GenreForm';

const RouteContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const GenreRoute = ({ location }) => {
  const [comingUrl, setUrl] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { genre } = useParams();

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

  if (loadingApi) return <Spinner />;
  if (errorAPi) return <p>Error: {errorAPi}</p>;
  return (
    <RouteContainer>
      <GenreForm genre={genre} />
      <MoviesGridContainer>
        <MoviesGrid>
          {dataApi &&
            dataApi.map((movie) => <GridCard key={movie.id} movie={movie} />)}
          <div ref={lastMovie} />
        </MoviesGrid>
      </MoviesGridContainer>
    </RouteContainer>
  );
};
