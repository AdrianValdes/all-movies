import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GridCard } from './GridCard';
import {
  handleIntersectionObserver,
  MoviesGridContainer,
  MoviesGrid,
  Spinner,
} from '../../app/shared';

import { GenreFilters } from './GenreFilters';

import { useFetchMoviesOrPeople } from '../../app/hooks';
import { buildFiltersQuery } from '../../app/shared/helpers';

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

    const { sort, score, language } = filters;
    const urlWithFilters = buildFiltersQuery({
      genreUrl,
      sort,
      score,
      language,
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
              <GridCard
                key={movie.id}
                movie={movie}
                language={`language=${filters.language}`}
              />
            ))}
          <div ref={lastItem} />
        </MoviesGrid>
      </MoviesGridContainer>
    </RouteContainer>
  );
};
