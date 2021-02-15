import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FcRating } from 'react-icons/fc';
import { IMAGE_BASE_URL_LOW } from '../../app/urls';

export const Card = styled.div`
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
export const RowCard = ({ movie }) => (
  <Link
    to={{
      pathname: `/movie/${movie.id}`,
      state: { movie },
    }}
  >
    <Card>
      <ImageWrapper>
        <Img alt='movie' src={`${IMAGE_BASE_URL_LOW}${movie.poster_path}`} />
      </ImageWrapper>
      <CardContent>
        <CardTitle>{movie.title}</CardTitle>
        <CardDate>
          {new Date(movie.release_date).toDateString().slice(4)}
        </CardDate>
        <p>
          <FcRating style={{ marginRight: '10px' }} />
          {movie.vote_average}
        </p>
      </CardContent>
    </Card>
  </Link>
);
