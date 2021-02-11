import React from 'react';
import styled from 'styled-components';
import { ImageWrapper, Img } from './MovieCard';

const IndividualPageCard = styled.div`
  width: 300px;
  min-width: 300px;
  margin-left: 40px;
`;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const MovieRoute = ({ location }) => {
  const { poster_path, title } = location.state;

  return (
    <div>
      <IndividualPageCard>
        <ImageWrapper>
          <Img alt='movie' src={`${IMAGE_BASE_URL}${poster_path}`} />
        </ImageWrapper>
        <h1>Movie:{title}</h1>
      </IndividualPageCard>
    </div>
  );
};
