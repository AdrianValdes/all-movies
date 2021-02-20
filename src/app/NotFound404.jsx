import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AddReviewButton } from './shared';
import poster from '../assets/images/poster1.png';

const Main = styled.div`
  height: 100vh;
  background-image: url(${poster});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;

const GoHomeButton = styled(AddReviewButton)`
  background-color: rgb(61, 20, 15);
  width: 300px;
  position: absolute;
  bottom: 10%;
  right: 50%;
  transform: translate(-calc(50% - 300px), -50%);
`;

export const NotFound404 = () => {
  const history = useHistory();
  return (
    <Main>
      <GoHomeButton type='button' onClick={() => history.push('/')}>
        Go back Home
      </GoHomeButton>
    </Main>
  );
};
