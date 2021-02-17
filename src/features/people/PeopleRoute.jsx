import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { KEY, IMAGE_BASE_URL_LOW } from '../../app/urls';
import { useFetchMoviesOrPeople } from '../../app/hooks';
import { ImageWrapper } from '../movies/RowCard';
import { Img } from '../movies/GridCard';
import {
  MoviesGridContainer,
  PeopleGrid,
  handleIntersectionObserver,
} from '../../app/shared';
import { Spinner } from '../../app/shared/components/Spiner';

const PeopleSection = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Title = styled.h1`
  text-align: start;
  margin-left: 30px;
  margin-top: -30px;
`;

const PersonCard = styled(Link)`
  width: 300px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  color: black;
`;

const Name = styled.h3`
  padding: 10px;
  font-size: 20px;
`;

const KnowFor = styled.p`
  padding: 0 10px 10px 10px;
  font-size: 20px;
  color: grey;
`;

export const PeopleRoute = () => {
  const [comingUrl, setUrl] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const peopleUrl = `https://api.themoviedb.org/3/person/popular?api_key=${KEY}&language=en-US`;

  if (peopleUrl !== comingUrl) {
    setUrl(peopleUrl);
  }

  const { dataApi, loadingApi, errorAPi, hasMore } = useFetchMoviesOrPeople(
    comingUrl,
    peopleUrl,
    pageNumber
  );

  const observer = useRef();
  const lastItem = useRef();

  useEffect(() => {
    handleIntersectionObserver({
      loadingApi,
      setPageNumber,
      hasMore,
      observer,
      lastItem,
    });
    return observer.unobserve;
  }, [loadingApi, hasMore]);

  if (loadingApi) return <Spinner />;
  if (errorAPi) return <p>Error: {errorAPi}</p>;
  return (
    <main>
      <PeopleSection>
        <Title>Popular People</Title>
        <MoviesGridContainer>
          <PeopleGrid>
            {dataApi &&
              dataApi.map((person) => (
                <PersonCard
                  key={person.id}
                  to={{
                    pathname: `/profile/${person.id}`,
                    state: { id: person.id, known_for: person.known_for },
                  }}
                >
                  <ImageWrapper>
                    {person.profile_path && (
                      <Img
                        src={`${IMAGE_BASE_URL_LOW}${person.profile_path}`}
                        alt={person.name}
                      />
                    )}
                  </ImageWrapper>
                  <Name>{person.name}</Name>
                  <KnowFor>{person.known_for_department}</KnowFor>
                </PersonCard>
              ))}
            <div ref={lastItem} />
          </PeopleGrid>
        </MoviesGridContainer>
      </PeopleSection>
    </main>
  );
};
