import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GridCard } from './GridCard';

export const ActionRoute = () => {
  const { action } = useSelector((state) => state.movies);

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

  return (
    <div>
      <h1>Action movies</h1>
      <MoviesGridContainer>
        <MoviesGrid>
          {action.map(
            ({ poster_path, release_date, vote_average, title, id }) => (
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
        </MoviesGrid>
      </MoviesGridContainer>
    </div>
  );
};
