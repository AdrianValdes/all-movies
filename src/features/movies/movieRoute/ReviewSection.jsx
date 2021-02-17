import React from 'react';
import styled from 'styled-components';

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

export const Title = styled.h4`
  margin-right: 20px;
  margin-bottom: 20px;
`;

const ReviewContainer = styled.div`
  margin-right: 40px;
  max-width: 1150px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px 40px;
`;
const Article = styled.article`
  line-height: 2;
`;

const Release = styled.h5`
  color: grey;
  font-weight: 300;
  font-size: 0.9em;
  margin-bottom: 15px;
`;
const Author = styled.span`
  color: #000;
`;
export const ReviewSection = ({ reviews }) => (
  <Section>
    <TitlesContainer>
      <Title>Reviews</Title>
      <Title>Add review</Title>
    </TitlesContainer>
    <ReviewContainer>
      <h3>A review by {reviews[0]?.author}</h3>
      <Release>
        Written by <Author>{reviews[0]?.author}</Author> on{' '}
        {new Date(reviews[0]?.created_at).toDateString().slice(4)}{' '}
      </Release>
      <Article>{reviews[0]?.content}</Article>
    </ReviewContainer>
  </Section>
);
