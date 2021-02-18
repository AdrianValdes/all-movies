import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import styled from 'styled-components';
import { IMAGE_BASE_URL_MEDIUM } from '../../../app/urls';
import { ReviewContainer, Release, Author, Article } from './ReviewSection';

export const AddReview = ({ location }) => {
  const { release_date, title, poster_path } = location.state;

  const AddContainer = styled.div`
    margin: 20px;
    display: flex;
  `;

  const Img = styled.img`
    width: 300px;
  `;

  const Title = styled.h3`
    font-size: 20px;
    margin: 20px;
  `;

  const Span = styled.span`
    font-weight: 500;
  `;
  return (
    <AddContainer>
      <Img src={`${IMAGE_BASE_URL_MEDIUM}${poster_path}`} alt={title} />
      <Title>
        Title:{' '}
        <Span>
          {title} ({new Date(release_date).getFullYear()})
        </Span>
      </Title>
    </AddContainer>
  );
};
