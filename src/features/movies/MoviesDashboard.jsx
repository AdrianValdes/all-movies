import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MoviesRow } from './MoviesRow';

const RowWrapper = styled.div`
  padding-top: 30px;
  max-width: 1300px;
`;
const RowTitle = styled.h2`
  padding-left: 40px;
  color: black;
  text-decoration: none;
`;

export const MoviesDashboard = ({ comedies, animation, popular }) => (
  <main>
    <RowWrapper>
      <RowTitle>
        <Link to='/'>Popular</Link>
      </RowTitle>
      <MoviesRow movies={popular} />
    </RowWrapper>
    <RowWrapper>
      <RowTitle>
        <Link to='/'> Comedies</Link>
      </RowTitle>
      <MoviesRow movies={comedies} />
    </RowWrapper>
    <RowWrapper>
      <RowTitle>
        <Link to='/'>Animation</Link>
      </RowTitle>
      <MoviesRow movies={animation} />
    </RowWrapper>
  </main>
);
