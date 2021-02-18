import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Img, Row } from '../../app/shared/components';
import { IMAGE_BASE_URL_LOW } from '../../app/shared';

const ImageWrapper = styled.div`
  width: 200px;
  height: 350px;
  margin-right: 20px;
`;

const Title = styled.p`
  font-size: 20px;
  padding: 10px 0;
  text-align: center;
  color: black;
`;

const MoviesRow = styled(Row)`
  height: 450px;
`;
export const KnownFor = ({ known_for }) => (
  <>
    <h1>Known For</h1>
    <MoviesRow>
      {known_for &&
        known_for.map((movie) => (
          <Link
            key={movie.id}
            to={{
              pathname: `/movie/${movie.id}`,
              state: { id: movie.id },
            }}
          >
            <ImageWrapper>
              <Img
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL_LOW}${movie?.poster_path}`
                    : 'https://via.placeholder.com/200x300?text=no+image'
                }
                alt={movie.original_title}
              />
              <Title>{movie.original_title}</Title>
            </ImageWrapper>
          </Link>
        ))}
    </MoviesRow>
  </>
);
