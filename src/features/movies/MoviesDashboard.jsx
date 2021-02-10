import React from 'react';
import { useMovies } from '../../app/context/movies/movies';
import { MoviesRow } from './MoviesRow';

export const MoviesDashboard = () => {
  const { comedies, popular, animation } = useMovies();

  return (
    <main>
      <div className='main' style={{ maxWidth: '1600px' }}>
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
};
