import React from 'react';
import styled from 'styled-components';
import { FcRating } from 'react-icons/fc';
import { IMAGE_BASE_URL_LOW } from '../../app/urls';

export const Card = styled.div`
  width: 180px;
  min-width: 160px;
  margin-left: 40px;
  color: black;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
`;

export const ImageWrapper = styled.div`
  border-radius: 10px;
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
`;

const CardDate = styled.p`
  font-size: 1em;
  color: rgba(0, 0, 0, 0.6);
  padding: 5px 0;
`;

const CardContent = styled.div`
  padding: 16px 10px 12px 10px;
`;
export const GridCard = ({
  poster_path,
  release_date,
  vote_average,
  title,
}) => (
  <Card>
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
  </Card>
);
