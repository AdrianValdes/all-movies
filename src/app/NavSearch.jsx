import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import img from '../assets/images/search-regular-24.png';

const Input = styled.input`
  padding: 5px 20px;
  width: 20px;
  border: none;
  outline: none;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: right;
  transition: width 0.4s ease;
  background-color: #032541;
  &:focus {
    width: 300px;
    background-color: white;
  }
`;
export const NavSearch = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  return (
    <Input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          history.push({ pathname: `/search/${query}`, state: { query } });
          setQuery('');
        }
      }}
      type='search'
      placeholder='Search...'
    />
  );
};
