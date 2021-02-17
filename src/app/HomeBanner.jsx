import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BannerHome } from './shared/components';
import { IMAGE_BASE_URL_HIGH } from './urls';

const FormStyle = styled.div`
  width: 90%;
  position: relative;
  border: 1px solid lightgrey;
  border-radius: 20px;
  align-self: flex-start;
  background-color: #fff;
`;

const StyleH1 = styled.h1`
  align-self: flex-start;
  font-size: 40px;
  color: white;
`;

const StyleH3 = styled.h3`
  align-self: flex-start;
  font-size: 25px;
  margin-bottom: 40px;
  margin-top: 5px;
  color: white;
`;

const Input = styled.input`
  border: none;
  width: 90%;
  height: 45px;
  padding: 10px 15px;
  font-size: 15px;
  border-radius: 30px;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled(Link)`
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  position: absolute;
  cursor: pointer;
  right: -2px;
  height: 45px;
  width: 80px;
  font-weight: 700;
  background-color: #47cfb5;
  color: white;
  &:hover {
    background-color: rgb(3, 37, 65);
    outline: none;
    cursor: pointer;
  }
`;

export const HomeBanner = ({ headerImageId }) => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const inputRef = useRef();

  let imageUrl;
  if (headerImageId) {
    imageUrl = `${IMAGE_BASE_URL_HIGH}${headerImageId}`;
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <BannerHome imageUrl={imageUrl}>
      <StyleH1>Welcome to MOVIES!</StyleH1>
      <StyleH3>Explore millions of movies and people now.</StyleH3>
      <FormStyle>
        <Input
          type='text'
          ref={inputRef}
          value={query}
          placeholder='Search for a movie or person...'
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              history.push({ pathname: `/search/${query}`, state: { query } });
            }
          }}
        />
        <SearchButton to={{ pathname: `/search/${query}`, state: { query } }}>
          Search
        </SearchButton>
      </FormStyle>
    </BannerHome>
  );
};
