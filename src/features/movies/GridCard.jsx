import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMAGE_BASE_URL_LOW } from '../../app/urls';
import { CircularBar } from '../../app/shared/components';

const Card = styled.div`
  width: 180px;
  min-width: 160px;
  margin-left: 40px;
  color: black;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  height: 100%;
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
const RatingCircle = styled.div`
  position: absolute;
  top: -20px;
  left: 10px;
`;

const CardContent = styled.div`
  padding: 26px 10px 12px 10px;
  position: relative;
`;

export const GridCard = ({ movie }) => (
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
        <RatingCircle>
          <CircularBar
            vote_average={movie.vote_average}
            className='row-card-icon'
          />
        </RatingCircle>
      </CardContent>
    </Card>
  </Link>
);
