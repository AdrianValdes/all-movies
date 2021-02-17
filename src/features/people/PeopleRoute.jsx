import React from 'react';
import styled from 'styled-components';
import { KEY, IMAGE_BASE_URL_LOW } from '../../app/urls';
import { useFetch } from '../../app/hooks/useFetch';
import { ImageWrapper, Img } from '../movies/RowCard';

const PeopleSection = styled.section`
  margin: 20px;
`;

const PersonCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PeopleRoute = () => {
  const peopleUrl = `https://api.themoviedb.org/3/person/popular?api_key=${KEY}&language=en-US&page=1`;
  const { dataApi } = useFetch(peopleUrl);

  return (
    <PeopleSection>
      <h1>Popular People</h1>
      {dataApi.results.map((person) => (
        <PersonCard key={person.id}>
          <ImageWrapper>
            {person.profile_path && (
              <Img
                src={`${IMAGE_BASE_URL_LOW}${person.profile_path}`}
                alt={person.name}
              />
            )}
          </ImageWrapper>
          <p>{person.name}</p>
        </PersonCard>
      ))}
    </PeopleSection>
  );
};
