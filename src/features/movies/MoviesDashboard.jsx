import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAnimationsAction,
  fetchComediesAction,
  fetchPopularsAction,
} from '../../app/store/actions/moviesAction';

import { MoviesRow } from './MoviesRow';

export const MoviesDashboard = () => {
  const dispatch = useDispatch();
  const { comedies, animation, popular } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchComediesAction());
    dispatch(fetchAnimationsAction());
    dispatch(fetchPopularsAction());
  }, []);

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
          <p>pouplar</p>
          <MoviesRow movies={popular} />
        </div>
      </div>
    </main>
  );
};
