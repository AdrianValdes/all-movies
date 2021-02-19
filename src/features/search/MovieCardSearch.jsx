import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  IMAGE_BASE_URL_LOW,
  Img,
  SearchCard,
  SearchCardImgWrapper,
} from '../../app/shared';
import { prettifyDate } from '../../app/shared/helpers/prettifyDate';

const Details = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Title = styled.h2`
  font-size: 1.2em;
  line-height: 1.2em;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Release = styled.p`
  white-space: nowrap;
  color: #999;
  margin-bottom: auto;
  padding: 10px 0;
`;

const Overview = styled.p`
  font-size: 1em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
`;

export const MovieCardSearch = ({ movie, language = 'language=en-US' }) => (
  <Link
    key={movie.id}
    to={{
      pathname: `/movie/${movie.id}`,
      state: { id: movie.id, language },
    }}
  >
    <SearchCard>
      <SearchCardImgWrapper>
        <Img
          src={
            movie.poster_path
              ? `${IMAGE_BASE_URL_LOW}${movie?.poster_path}`
              : 'https://via.placeholder.com/94x94?text=no+image'
          }
          alt={movie.title}
        />
      </SearchCardImgWrapper>
      <Details>
        <Title>{movie.title}</Title>
        <Release>{prettifyDate(movie.release_date)}</Release>
        <Overview>{movie?.overview}</Overview>
      </Details>
    </SearchCard>
  </Link>
);
