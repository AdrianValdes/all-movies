import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AddReviewButton } from '../../app/shared';
import looking from '../../assets/images/looking.jpg';

const Main = styled.div`
  height: 100vh;
  background-image: url(${looking});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;

const Container = styled.div`
  width: 60%;
  position: absolute;
  top: 20%;
  right: 10%;
  display: flex;
  flex-direction: column;
`;

const Note = styled.h1`
  font-size: 75px;
  color: rgb(8, 48, 82);
  margin-bottom: 40px;
  text-align: center;
`;

const GoHomeButton = styled(AddReviewButton)`
  background-color: rgb(8, 48, 82);
  width: 250px;
  transform: translate(-calc(50% - 300px), -50%);
  align-self: center;
`;

export const NoResults = () => {
  const history = useHistory();
  return (
    <Main>
      <Container>
        <Note>Oops! We can not find what you are looking for.</Note>
        <GoHomeButton type='button' onClick={() => history.push('/')}>
          Try Again
        </GoHomeButton>
      </Container>
    </Main>
  );
};
