import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFetch } from '../../app/hooks/useFetch';
import { fetchActionsAction } from '../../app/store/actions/moviesAction';
import { actionUrl } from '../../app/urls';
import { GridCard } from './GridCard';

const MoviesGridContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 30px;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  max-width: 1200px;
  width: 100%;
  gap: 40px 0;
`;
export const ActionRoute = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const { action } = useSelector((state) => state.movies);

  const urlToFetch = `${actionUrl}&page=${pageNumber}`;
  const { loadingApi, errorAPi, hasMore } = useFetch(urlToFetch);

  const observer = useRef();

  const lastMovie = useCallback(
    (movieNode) => {
      if (loadingApi) return;
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevsPageNum) => prevsPageNum + 1);
        }
      });
      if (movieNode) observer.current.observe(movieNode);
    },
    [loadingApi, hasMore]
  );

  useEffect(() => {
    dispatch(fetchActionsAction(urlToFetch));
  }, [urlToFetch]);

  if (loadingApi) return <p>Loading</p>;
  if (errorAPi) return <p>Error: {errorAPi}</p>;
  return (
    <div>
      <h1>Action movies</h1>
      <MoviesGridContainer>
        <MoviesGrid>
          {action &&
            action.map(
              ({ poster_path, release_date, vote_average, title, id }, idx) => (
                <Link
                  to={{
                    pathname: `/movie/${id}`,
                    state: { poster_path, release_date, title, id },
                  }}
                  key={id}
                >
                  <GridCard
                    poster_path={poster_path}
                    release_date={release_date}
                    vote_average={vote_average}
                    title={title}
                  />
                </Link>
              )
            )}
          <div ref={lastMovie} />
        </MoviesGrid>
      </MoviesGridContainer>
    </div>
  );
};
