import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  IMAGE_BASE_URL_LOW,
  Img,
  SearchCard,
  SearchCardImgWrapper,
} from '../../app/shared';

const Details = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 15px 15px;
`;

const Title = styled.h2`
  font-size: 1.2em;
  line-height: 1.2em;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Movies = styled.span`
  font-size: 1em;
  margin-left: 10px;
  &::before {
    content: '•';
    font-size: 1.1em;
    line-height: 1;
    width: 100%;
    height: 100%;
    padding-right: 10px;
    z-index: -1;
  }
`;

const Department = styled.span`
  font-weight: 600;
`;
export const PersonCardSearch = ({
  person: { id, profile_path, name, known_for, known_for_department },
}) => (
  <SearchCard>
    <Link
      key={id}
      to={{
        pathname: `/profile/${id}`,
        state: { id },
      }}
    >
      <SearchCardImgWrapper>
        <Img
          src={
            profile_path
              ? `${IMAGE_BASE_URL_LOW}${profile_path}`
              : 'https://via.placeholder.com/94x94?text=no+image'
          }
          alt={name}
        />
      </SearchCardImgWrapper>{' '}
    </Link>
    <Details>
      <Title>{name}</Title>
      <Department>{known_for_department}</Department>
      {known_for.map((movie) => (
        <Link
          to={{
            pathname: `/movie/${movie.id}`,
            state: { id: movie.id },
          }}
          key={movie.id}
        >
          <Movies>{movie.original_title}</Movies>
        </Link>
      ))}
    </Details>
  </SearchCard>
);
