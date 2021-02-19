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
  width: 500px;
  height: 500px;
`;

const Main = styled.main`
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const NoResults = () => {
  const history = useHistory();

  return (
    <Main>
      <h1>
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
      </h1>
      <SvgContainer>
        <NoResultImg />
      </SvgContainer>
    </Main>
  );
};
