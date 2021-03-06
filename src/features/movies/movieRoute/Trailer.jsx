import React from 'react';
import styled from 'styled-components';
import { Notice } from './Cast';
import { TitlesContainer } from './ReviewSection';
import { IMAGE_BASE_URL_HIGH } from '../../../app/shared';

const Section = styled.section`
  margin-top: 40px;
  margin-left: 40px;
  max-width: 1200px;
`;

export const Title = styled.h3`
  margin-right: 20px;
  margin-bottom: 20px;
`;

const TrailerPoster = styled.div`
  display: flex;
  margin-right: 40px;
`;

const TrailerContainer = styled.div`
  padding-bottom: 40px;
`;

const PostContainer = styled.div`
  height: 315px;
  flex-grow: 1;
`;

const ImgPoster = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Trailer = ({ trailerKey, poster_path }) => (
  <Section>
    <TitlesContainer>
      <Title>Trailer</Title>
      <Title>Poster</Title>
    </TitlesContainer>
    <TrailerPoster>
      <TrailerContainer>
        {trailerKey ? (
          <iframe
            title='trailer'
            name='trailer'
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${trailerKey}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          />
        ) : (
          <Notice>There is no trailer for this movie yet, sorry :(</Notice>
        )}
      </TrailerContainer>
      <PostContainer>
        <ImgPoster
          alt='movie'
          src={
            poster_path
              ? `${IMAGE_BASE_URL_HIGH}${poster_path}`
              : 'https://via.placeholder.com/300?text=No+Image'
          }
        />
      </PostContainer>
    </TrailerPoster>
  </Section>
);
