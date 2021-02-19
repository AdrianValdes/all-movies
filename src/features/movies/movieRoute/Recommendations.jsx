import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMAGE_BASE_URL_LOW } from '../../../app/shared';

import { Img, Row } from '../../../app/shared/components';

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
  color: #000;
`;

const MoviesRow = styled(Row)`
  padding-bottom: 2px;
`;

const Card = styled.div`
  margin-right: 20px;
`;

export const Recommendations = ({
  recommendations,
  language = 'language=en-US',
}) => (
  <Section>
    <Title>Recommendations</Title>
    <MoviesRow>
      {recommendations.map(
        ({ id, backdrop_path, title, name, vote_average }) => {
          const pathname = title ? `/movie/${id}` : `/show/${id}`;
          return (
            <Link
              key={id}
              to={{
                pathname: `${pathname}`,
                state: { id, language },
              }}
            >
              <Card>
                <ImageWrapper>
                  <Img
                    alt='movie'
                    src={
                      backdrop_path
                        ? `${IMAGE_BASE_URL_LOW}${backdrop_path}`
                        : 'https://via.placeholder.com/250x150?text=no+image'
                    }
                  />
                </ImageWrapper>
                <CardContent>
                  <p>{title || name}</p>
                  <p> {`${vote_average * 10}%`}</p>
                </CardContent>
              </Card>
            </Link>
          );
        }
      )}
    </MoviesRow>
  </Section>
);
