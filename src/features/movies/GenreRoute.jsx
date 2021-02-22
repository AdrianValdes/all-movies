import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MovieCard } from './MovieCard';
import {
  handleIntersectionObserver,
  MoviesGridContainer,
  MoviesGrid,
  Spinner,
  buildFiltersQuery,
  buildGenresQuery,
} from '../../app/shared';
import genresJSON from '../../app/shared/urls/genres.json';
import { useFetchMoviesOrPeople } from '../../app/hooks';
import { Filters } from './Filters';

const RouteContainer = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1600px;
  padding: 20px;
`;

const NoResultsContainer = styled.div`
  font-size: 24px;
  position: absolute;
  right: 30%;
`;

export const GenreRoute = ({ location }) => {
  if (!location.state) {
    return <Redirect to='/404' />;
  }
  const [pageNumber, setPageNumber] = useState(1);

  const [filters, setFilters] = useState({
    sort: 'popularity.desc',
    language: 'en-US',
    score: '',
    original_language: 'en',
  });
  const [allGenres, setAllGenres] = useState(genresJSON.genres);
  const { genre } = useParams();

  const { genreUrl } = location.state;
  const [urlToFetch, setUrlToFetch] = useState(genreUrl);
  const { dataApi, loadingApi, errorAPi, hasMore } = useFetchMoviesOrPeople(
    urlToFetch,
    pageNumber
  );

  useEffect(() => {
    /* Handle when the route changes  */
    setUrlToFetch(genreUrl);
    setFilters({
      sort: 'popularity.desc',
      language: 'en-US',
      score: '',
      original_language: 'en',
    });
    setPageNumber(1);
    setAllGenres(genresJSON.genres);
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
    const queryGenres = buildGenresQuery(allGenres);
    const urlWithFilters = buildFiltersQuery({
      genreUrl,
      sort,
      score,
      language,
      original_language,
      queryGenres,
    });
    setPageNumber(1);

    setUrlToFetch(urlWithFilters);
  };

  if (loadingApi) return <Spinner />;
  if (errorAPi) return <p>Error: {errorAPi}</p>;

  return (
    <main>
      <RouteContainer>
        <Filters
          genre={genre}
          filters={filters}
          handleFilters={handleFilters}
          handleSearch={handleSearch}
          allGenres={allGenres}
          setAllGenres={setAllGenres}
        />
        <MoviesGridContainer>
          <MoviesGrid>
            {dataApi.length > 0 ? (
              dataApi.map((movie) => (
                <MovieCard
                  key={movie.id}
                  item={movie}
                  language={`language=${filters.language}`}
                />
              ))
            ) : (
              <NoResultsContainer>
                There is no results for your search :(. Try again, please.
              </NoResultsContainer>
            )}
            <div ref={lastItem} />
          </MoviesGrid>
        </MoviesGridContainer>
      </RouteContainer>
    </main>
  );
};
