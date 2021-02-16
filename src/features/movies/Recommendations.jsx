import React from 'react';
import styled from 'styled-components';
import { IMAGE_BASE_URL_LOW } from '../../app/urls';
import { Img } from './RowCard';
import { Row } from './MoviesRow';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-bottom: 40px;
  max-width: 1200px;
`;

const Title = styled.h4`
  margin-right: 20px;
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 150px;
`;

const CardContent = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

const MoviesRow = styled(Row)`
  padding-bottom: 2px;
`;

const Card = styled.div`
  margin-right: 20px;
`;

export const Recommendations = ({ recommendations }) => (
  <Section>
    <Title>Recommendations</Title>
    <MoviesRow>
      {recommendations.map((movie) => (
        <Card key={movie.id}>
          <ImageWrapper>
            <Img
              alt='movie'
              src={`${IMAGE_BASE_URL_LOW}${movie.backdrop_path}`}
            />
          </ImageWrapper>
          <CardContent>
            <p>{movie.title}</p>
            <p> {`${movie.vote_average * 10}%`}</p>
          </CardContent>
        </Card>
      ))}
    </MoviesRow>
  </Section>
);
