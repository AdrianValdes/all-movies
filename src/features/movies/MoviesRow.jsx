import React from 'react';

import { Row } from '../../app/shared/components';
import { RowCard } from './RowCard';

export const MoviesRow = ({ movies }) => (
  <Row>
    {movies.map((movie) => (
      <RowCard key={movie.id} movie={movie} />
    ))}
  </Row>
);
