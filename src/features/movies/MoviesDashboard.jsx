import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAnimationsAction,
  fetchComediesAction,
  fetchPopularsAction,
} from '../../app/store/actions/moviesAction';

import { MoviesRow } from './MoviesRow';

export const MoviesDashboard = ({ comedies, animation, popular }) => (
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
