import React from 'react';
import styled from 'styled-components';

const FactsWrapper = styled.div`
  margin-bottom: 20px;
`;

const Certification = styled.span`
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
  padding: 0.06em 4px 0.15em 4px;
  line-height: 1;
  border-radius: 2px;
  margin-right: 7px;
`;

const Genres = styled.span`
  padding-left: 10px;
  position: relative;
  top: 0;
  left: 0;
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

export const Facts = ({
  certification,
  release_date,
  genresString,
  runtime,
}) => (
  <FactsWrapper>
    <Certification>{certification}</Certification>
    <span>{release_date} (US)</span>
    <Genres> {genresString}</Genres>
    <Genres>{runtime ? `${runtime} min` : ''}</Genres>
  </FactsWrapper>
);
