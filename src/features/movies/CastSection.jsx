import React from 'react';
import styled from 'styled-components';
import { IMAGE_BASE_URL_LOW } from '../../app/urls';
import { Card, ImageWrapper, Img } from './RowCard';
import { Row } from './MoviesRow';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const CastContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CastTitle = styled.h3`
  margin-left: 40px;
  margin-bottom: 20px;
`;

const CastCard = styled(Card)`
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
`;

export const Notice = styled.p`
  text-align: center;
  padding: 20px 0;
`;

const Character = styled.p`
  margin-left: 10px;
  margin-bottom: 20px;
`;

const CharacterName = styled.p`
  margin-left: 10px;
  margin-top: 10px;
  font-weight: 700;
`;

export const CastSection = ({ cast }) => (
  <>
    {cast.length > 0 ? (
      <Row style={{ maxWidth: '1200px' }}>
        <Section>
          <CastTitle>Top Billed Cast</CastTitle>
          <CastContainer>
            {cast.map((person) => (
              <CastCard key={person.id}>
                <ImageWrapper>
                  {person.profile_path ? (
                    <Img
                      src={`${IMAGE_BASE_URL_LOW}${person.profile_path}`}
                      alt={person.name}
                    />
                  ) : (
                    <Img
                      src='https://via.placeholder.com/150x225?text=no+image'
                      alt={person.name}
                    />
                  )}
                </ImageWrapper>
                <CharacterName>{person.original_name}</CharacterName>
                <Character>{person.character}</Character>
              </CastCard>
            ))}
          </CastContainer>
        </Section>
      </Row>
    ) : (
      <Notice>
        We do not have any cast added to this movie. You can help by adding
        some!
      </Notice>
    )}
  </>
);