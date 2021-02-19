import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  IMAGE_BASE_URL_LOW,
  MoviesGridContainer,
  PeopleGrid,
  handleIntersectionPeople,
  Img,
  peopleUrl,
} from '../../app/shared';
import { ImageWrapper } from '../movies/RowCard';

import { Spinner } from '../../app/shared/components/Spiner';
import { fetchPeopleAction } from '../../app/store/actions/peopleActions';

const PeopleSection = styled.div`
  width: 100%;
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
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const { people } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch({ type: 'CLEAR_PEOPLE' });
  }, []);

  useEffect(() => {
    const newPeopleUrl = `${peopleUrl}&page=${pageNumber}`;

    async function handleFetch() {
      setLoading(true);
      try {
        dispatch(fetchPeopleAction(newPeopleUrl));
        setLoading(false);
      } catch (apiError) {
        setError(apiError);
        setLoading(false);
      }
    }
    handleFetch();
  }, [pageNumber]);

  const observer = useRef();
  const lastItem = useRef();

  useEffect(() => {
    handleIntersectionPeople({
      loading,
      setPageNumber,
      observer,
      lastItem,
    });
    return observer.unobserve;
  }, [loading]);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;
  return (
    <main>
      <PeopleSection>
        <Title>Popular People</Title>
        <MoviesGridContainer>
          <PeopleGrid>
            {people &&
              people.map((person) => (
                <PersonCard
                  key={person.id}
                  to={{
                    pathname: `/profile/${person.id}`,
                    state: { id: person.id },
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
