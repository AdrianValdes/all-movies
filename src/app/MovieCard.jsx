import React from 'react';
import styled from 'styled-components';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

const Card = styled.div`
  width: 150px;
  min-width: 150px;
  margin-left: 40px;
`;

const ImageWrapper = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  background: #dbdbdb;
  width: 100%;
  min-height: calc(150px * 1.5);
  height: calc(150px * 1.5);
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
export const MovieCard = ({
  poster_path,
  release_date,
  vote_average,
  title,
}) => (
  <Card>
    <ImageWrapper>
      <Img alt='movie' src={`${IMAGE_BASE_URL}${poster_path}`} />
    </ImageWrapper>

    <p>{title}</p>
    <p>{vote_average}</p>
  </Card>
);
