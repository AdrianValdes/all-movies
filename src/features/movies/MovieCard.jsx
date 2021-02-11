import React from 'react';
import styled from 'styled-components';
import { IMAGE_BASE_URL_LOW } from '../../app/urls';

export const RowCard = styled.div`
  width: 150px;
  min-width: 150px;
  margin-left: 40px;
`;

export const ImageWrapper = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  background: #dbdbdb;
  width: 100%;
`;
export const Img = styled.img`
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
  <RowCard>
    <ImageWrapper>
      <Img alt='movie' src={`${IMAGE_BASE_URL_LOW}${poster_path}`} />
    </ImageWrapper>

    <p>{title}</p>
    <p>{vote_average}</p>
  </RowCard>
);
