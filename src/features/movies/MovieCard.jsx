import React from 'react';
import styled from 'styled-components';
import { FcRating } from 'react-icons/fc';
import { IMAGE_BASE_URL_LOW } from '../../app/urls';

export const RowCard = styled.div`
  width: 150px;
  min-width: 150px;
  margin-left: 40px;
  color: black;
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

const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 1em;
  padding-top: 10px;
`;

const CardDate = styled.p`
  font-size: 1em;
  color: rgba(0, 0, 0, 0.6);
  padding: 5px 0;
`;

const CardContent = styled.div`
  padding: 2px 0;
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
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDate>{new Date(release_date).toDateString().slice(4)}</CardDate>
      <p>
        <FcRating style={{ marginRight: '10px' }} />
        {vote_average}
      </p>
    </CardContent>
  </RowCard>
);
