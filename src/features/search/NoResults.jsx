import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as NoResultsSVG } from '../../assets/images/no_results.svg';

const GoBack = styled.span`
  cursor: pointer;
  font-style: italic;
  color: #36344a;
`;

const NoResultImg = styled(NoResultsSVG)`
  width: 400px;
  height: 400px;
`;

const Main = styled.main`
  flex-direction: column;
  align-content: center;
  justify-content: start;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  margin: 50px 0;
`;

export const NoResults = () => {
  const history = useHistory();

  return (
    <main>
      <Main>
        <Title>
          Ups, there are no results :(. Maybe you want to try{' '}
          <GoBack
            onKeyPress={() => history.goBack()}
            role='button'
            tabIndex='0'
            onClick={() => history.goBack()}
          >
            another{' '}
          </GoBack>
          search
        </Title>
        <SvgContainer>
          <NoResultImg />
        </SvgContainer>
      </Main>
    </main>
  );
};
