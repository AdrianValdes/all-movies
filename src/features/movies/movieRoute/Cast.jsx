import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL_LOW } from '../../../app/shared';
import { ImageWrapper } from '../RowCard';
import { CastCard, Img, Row } from '../../../app/shared/components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const CastContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`;

const CastTitle = styled.h3`
  margin-left: 40px;
  margin-bottom: 20px;
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

const Wrapper = styled.div`
  max-width: 1200px;
`;

export const Cast = ({ cast }) => (
  <Wrapper>
    {cast.length > 0 ? (
      <Row>
        <Section>
          <CastTitle>Top Billed Cast</CastTitle>
          <CastContainer>
            {cast.map((person) => (
              <Link
                key={person.id}
                to={{
                  pathname: `/profile/${person.id}`,
                  state: { id: person.id },
                }}
              >
                <CastCard>
                  <ImageWrapper>
                    <Img
                      src={
                        person.profile_path
                          ? `${IMAGE_BASE_URL_LOW}${person.profile_path}`
                          : 'https://via.placeholder.com/150x225?text=no+image'
                      }
                      alt={person.name}
                    />
                  </ImageWrapper>
                  <CharacterName>{person.original_name}</CharacterName>
                  <Character>{person.character}</Character>
                </CastCard>
              </Link>
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
  </Wrapper>
);
