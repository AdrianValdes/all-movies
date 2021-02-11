import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesDashboard } from '../features/movies/MoviesDashboard';
import { HomeBanner } from './HomeBanner';
import {
  fetchAnimationsAction,
  fetchComediesAction,
  fetchPopularsAction,
} from './store/actions/moviesAction';
import { IMAGE_BASE_URL_HIGH } from './urls';

export const Home = () => {
  const [headerImageId, setHeaderImageId] = useState('');
  const dispatch = useDispatch();
  const { comedies, animation, popular } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchComediesAction());
    dispatch(fetchAnimationsAction());
    dispatch(fetchPopularsAction());
  }, []);

  useEffect(() => {
    if (popular.length > 0) {
      const randomElement = popular[Math.floor(Math.random() * popular.length)];
      setHeaderImageId(randomElement.backdrop_path);
    }
  }, [popular]);

  return (
    <div>
      <h1>Home</h1>
      <HomeBanner headerImageId={headerImageId} />
      {headerImageId && (
        <img src={`${IMAGE_BASE_URL_HIGH}${headerImageId}`} alt='banner' />
      )}

      <MoviesDashboard
        comedies={comedies}
        popular={popular}
        animation={animation}
      />
    </div>
  );
};
