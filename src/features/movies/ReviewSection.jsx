import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 20px;
  margin-left: 40px;
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

export const ReviewSection = () => (
  <Section>
    <TitlesContainer>
      <Title>Reviews</Title>
      <Title>Add review</Title>
    </TitlesContainer>
    <ReviewContainer>
      <h4>A review by</h4>
      <p>Written by on </p>
      {/* <article>{review}</article> */}
    </ReviewContainer>
  </Section>
);
