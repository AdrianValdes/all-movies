/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
import React from 'react';
import styled from 'styled-components';
import { selectCrew } from '../../../app/shared';

const People = styled.ol`
  margin-top: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  top: 0;
  left: 0;
`;

const Person = styled.li`
  width: 33%;
  flex-basis: 33%;
  text-align: left;
  margin-bottom: 14px;
  box-sizing: border-box;
  padding-right: 20px;
`;
const Name = styled.p`
  font-weight: bold;
  font-size: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Job = styled.p`
  font-size: 0.9em;
`;

export const Crew = ({ crew }) => {
  const selectedCrew = selectCrew(crew);

  return (
    <People>
      {selectedCrew &&
        selectedCrew.map((person, idx) => (
          <Person key={idx}>
            <Name>{person.name}</Name>
            <Job>{[...new Set(person.jobs)].join(', ')}</Job>
          </Person>
        ))}
    </People>
  );
};
