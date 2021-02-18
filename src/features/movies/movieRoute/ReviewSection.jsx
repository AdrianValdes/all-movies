import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { prettifyDate } from '../../../app/shared/helpers/prettifyDate';

const Section = styled.section`
  margin-top: 40px;
  margin-left: 40px;
  overflow: hidden;
  max-height: 350px;
  border-top: 1px solid #d7d7d7;
  padding-top: 20px;
`;

export const TitlesContainer = styled.div`
  display: flex;
`;

export const TitleLink = styled(Link)`
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: black;
  border-bottom: 6px solid lightgrey;
  &:hover {
    color: rgb(52, 60, 63);
  }
`;

export const ReviewContainer = styled.div`
  margin-right: 40px;
  max-width: 1150px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px 40px;
  margin-bottom: 20px;
`;

export const Article = styled.article`
  line-height: 2;
  font-size: 18px;
`;

export const Release = styled.h5`
  color: grey;
  font-weight: 300;
  font-size: 0.9em;
  margin-bottom: 15px;
`;

export const Author = styled.span`
  color: #000;
`;

const AddLink = styled(Link)`
  font-weight: 600;
`;

export const ReviewSection = ({
  reviews,
  release_date,
  title,
  poster_path,
}) => (
  <Section>
    <TitlesContainer>
      <TitleLink
        to={{
          pathname: '/reviews',
          state: { reviews, release_date, title, poster_path },
        }}
      >
        Read All Reviews
      </TitleLink>
      <TitleLink
        to={{
          pathname: '/addReview',
          state: { release_date, title, poster_path },
        }}
      >
        Add Review
      </TitleLink>
    </TitlesContainer>
    {reviews.length > 0 ? (
      <ReviewContainer>
        <h3>A review by {reviews[0]?.author}</h3>
        <Release>
          Written by <Author>{reviews[0]?.author}</Author> on{' '}
          {new Date(reviews[0]?.created_at).toDateString().slice(4)}{' '}
        </Release>
        <Article>{reviews[0]?.content}</Article>
      </ReviewContainer>
    ) : (
      <Article>
        We do not have any reviews for {title}, click{' '}
        <AddLink
          to={{
            pathname: '/addReview',
            state: { release_date, title, poster_path },
          }}
        >
          Add Review
        </AddLink>{' '}
        to write one.
      </Article>
    )}
  </Section>
);
