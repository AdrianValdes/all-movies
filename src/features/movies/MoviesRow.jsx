import React from 'react';
import styled from 'styled-components';
import { MovieCard } from '../../app/MovieCard';

const Row = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const MoviesRow = ({ movies }) => (
  <Row>
    {movies.map(({ poster_path, release_date, vote_average, title, id }) => (
      <MovieCard
        key={id}
        poster_path={poster_path}
        release_date={release_date}
        vote_average={vote_average}
        title={title}
      />
    ))}
  </Row>
);
