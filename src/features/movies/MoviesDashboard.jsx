import React from 'react';

import { MoviesRow } from './MoviesRow';

export const MoviesDashboard = ({ comedies, animation, popular }) => (
  <main>
    <div className='main' style={{ maxWidth: '1400px' }}>
      <div>
        <p>comedies</p>
        <MoviesRow movies={comedies} />
      </div>
      <div>
        <p>animation</p>
        <MoviesRow movies={animation} />
      </div>
      <div>
        <p>popular</p>
        <MoviesRow movies={popular} />
      </div>
    </div>
  </main>
);
