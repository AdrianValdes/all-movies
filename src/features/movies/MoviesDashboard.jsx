import React from 'react';
import { useMovies } from '../../app/context/movies/movies';
import { MoviesRow } from './MoviesRow';

export const MoviesDashboard = () => {
  const {
    comedies,
    popular,
    animation,
    comediesError,
    popularError,
    animationError,
  } = useMovies();

  return (
    <main>
      <div className='main' style={{ maxWidth: '1600px' }}>
        <div>
          <p>comedies</p>
          <MoviesRow movies={comedies} moviesError={comediesError} />
        </div>
        <div>
          <p>animation</p>
          <MoviesRow movies={animation} moviesError={animationError} />
        </div>
        <div>
          <p>pouplar</p>
          <MoviesRow movies={popular} moviesError={popularError} />
        </div>
      </div>
    </main>
  );
};
