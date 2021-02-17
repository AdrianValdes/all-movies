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

  &::-webkit-scrollbar {
    height: 8px;
    background-color: rgba(219, 219, 219);
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(219, 219, 219);
  }
`;

export const MoviesRow = ({ movies }) => (
  <Row>
    {movies.map((movie) => (
      <RowCard key={movie.id} movie={movie} />
    ))}
  </Row>
);
