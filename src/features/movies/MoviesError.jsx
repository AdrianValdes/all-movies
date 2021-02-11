import React from 'react';
import styled from 'styled-components';

const Error = styled.p`
  color: red;
`;

export const MoviesError = ({ moviesError }) => (
  <div>
    <Error>ups, you have an error: {moviesError}</Error>
  </div>
);
