import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RowCard } from './RowCard';

export const Row = styled.div`
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
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: { poster_path, release_date, title, id },
        }}
        key={id}
      >
        <RowCard
          poster_path={poster_path}
          release_date={release_date}
          vote_average={vote_average}
          title={title}
        />
      </Link>
    ))}
  </Row>
);
