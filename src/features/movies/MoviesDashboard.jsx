import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MoviesRow } from './MoviesRow';

const RowWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
`;

const RowTitle = styled.h2`
  padding-left: 40px;
  color: black;
  text-decoration: none;
`;

export const MoviesDashboard = ({ comedies, animation, popular }) => (
  <main>
    <div className='main'>
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
      <RowWrapper>
        <RowTitle>
          <Link to='/'>Popular</Link>
        </RowTitle>
        <MoviesRow movies={popular} />
      </RowWrapper>
    </div>
  </main>
);
