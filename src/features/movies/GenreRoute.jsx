import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MovieCard } from './MovieCard';
import {
  handleIntersectionObserver,
  MoviesGridContainer,
  MoviesGrid,
  Spinner,
  buildFiltersQuery,
} from '../../app/shared';

import { GenreFilters } from './GenreFilters';

import { useFetchMoviesOrPeople } from '../../app/hooks';

const RouteContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const GenreRoute = ({ location }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [filters, setFilters] = useState({
    sort: 'popularity.desc',
    language: 'en-US',
    score: '',
    original_language: 'en',
  });

  const { genre } = useParams();
  const { genreUrl } = location.state;
  const [urlToFetch, setUrlToFetch] = useState(genreUrl);

  const { dataApi, loadingApi, errorAPi, hasMore } = useFetchMoviesOrPeople(
    urlToFetch,
    pageNumber
  );
  useEffect(() => {
    setUrlToFetch(genreUrl);
    setFilters({
      sort: 'popularity.desc',
      language: 'en-US',
      score: '',
      original_language: 'en',
    });
    setPageNumber(1);
  }, [genreUrl]);

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

  const handleFilters = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  const handleSearch = (e) => {
    e.preventDefault();

    const { sort, score, language, original_language } = filters;

    const urlWithFilters = buildFiltersQuery({
      genreUrl,
      sort,
      score,
      language,
      original_language,
    });
    setPageNumber(1);
    setUrlToFetch(urlWithFilters);
  };

  if (loadingApi) return <Spinner />;
  if (errorAPi) return <p>Error: {errorAPi}</p>;

  return (
    <RouteContainer>
      <GenreFilters
        genre={genre}
        filters={filters}
        handleFilters={handleFilters}
        handleSearch={handleSearch}
      />
      <MoviesGridContainer>
        <MoviesGrid>
          {dataApi &&
            dataApi.map((movie) => (
              <MovieCard
                key={movie.id}
                item={movie}
                language={`language=${filters.language}`}
              />
            ))}
          <div ref={lastItem} />
        </MoviesGrid>
      </MoviesGridContainer>
    </RouteContainer>
  );
};
