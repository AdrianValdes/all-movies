import React from 'react';
import styled from 'styled-components';
import { AddReviewButton } from './shared';
import poster from '../assets/images/poster1.png';

const Main = styled.div`
  width: 100%;
  height: 82vh;
  background-image: url(${poster});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
`;

const GoHomeButton = styled(AddReviewButton)`
  margin: 0 auto;
  align-self: center;
  background-color: rgb(61, 20, 15);
  margin-top: 650px;
  width: 300px;
`;

export const NotFound404 = (props) => (
  <Main>
    <GoHomeButton type='button' onClick={() => props.history.push('/')}>
      Take Me Home!
    </GoHomeButton>
  </Main>
);
