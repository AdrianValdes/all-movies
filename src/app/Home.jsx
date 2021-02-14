import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MoviesDashboard } from '../features/movies/MoviesDashboard';
import { HomeBanner } from './HomeBanner';
import {
  fetchActionsAction,
  fetchAnimationsAction,
  fetchComediesAction,
  fetchPopularsAction,
} from './store/actions/moviesAction';

const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Home = () => {
  const [headerImageId, setHeaderImageId] = useState('');
  const dispatch = useDispatch();
  const { comedies, animation, popular } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchComediesAction());
    dispatch(fetchAnimationsAction());
    dispatch(fetchPopularsAction());
    dispatch(fetchActionsAction());
  }, []);

  useEffect(() => {
    if (popular.length > 0) {
      const randomElement = popular[Math.floor(Math.random() * popular.length)];
      setHeaderImageId(randomElement.backdrop_path);
    }
  }, [popular]);

  return (
    <div>
      <Section>
        <HomeBanner headerImageId={headerImageId} />
      </Section>
      <MoviesDashboard
        comedies={comedies}
        popular={popular}
        animation={animation}
      />
    </div>
  );
};
