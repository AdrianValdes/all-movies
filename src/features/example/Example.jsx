import React from 'react';
import styled from 'styled-components';

const MoviesCollection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(250px, auto);
`;

export const Example = () => (
  <MoviesCollection>
    <div>11</div>
    <div>11</div>
    <div>11</div>
    <div>11</div>
    <div>11</div>
  </MoviesCollection>
);
