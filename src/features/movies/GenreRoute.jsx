import React, { useEffect, useRef, useState } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { GridCard } from './GridCard';
import {
  handleIntersectionObserver,
  MoviesGridContainer,
  MoviesGrid,
} from '../../app/shared';
import { Spinner } from '../../app/shared/components/Spiner';
import { GenreForm } from './GenreFilters';
import { baseStringCount } from '../../app/urls';
import { useFetchMoviesOrPeople } from '../../app/hooks';

const RouteContainer = styled.section`
  display: flex;
  justify-content: center;
`;
const buildFiltersQuery = ({ genreUrl, sort, score, language }) =>
  `${genreUrl.slice(0, baseStringCount)}&${sort}&${score}&language=${language}`;

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
    setUrlToFetch(urlWithFilters);
    setPageNumber(1);
  };

  if (loadingApi) return <Spinner />;
  if (errorAPi) return <p>Error: {errorAPi}</p>;
  return (
    <RouteContainer>
      <GenreForm
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
