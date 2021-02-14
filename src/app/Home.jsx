import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MoviesDashboard } from '../features/movies/MoviesDashboard';
import { HomeBanner } from './HomeBanner';

const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Home = () => {
  const [headerImageId, setHeaderImageId] = useState('');

  const { comedies, animation, popular } = useSelector((state) => state.movies);

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
