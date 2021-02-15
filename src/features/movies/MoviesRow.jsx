import React from 'react';
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
    {movies.map((movie) => (
      <RowCard key={movie.id} movie={movie} />
    ))}
  </Row>
);
