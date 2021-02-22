import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BannerHome } from './shared/components';
import { IMAGE_BASE_URL_HIGH, SearchButton } from './shared';

const FormStyle = styled.div`
  width: 90%;
  position: relative;
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
  height: 50px;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 30px;
  &:focus {
    outline: none;
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
      <StyleH1>Welcome to ShowMe!</StyleH1>
      <StyleH3>Explore millions of movies, TV shows and people now.</StyleH3>
      <FormStyle>
        <Input
          type='text'
          ref={inputRef}
          value={query}
          placeholder='Search for a movie, tv show, or person...'
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              history.push({ pathname: `/search/${query}`, state: { query } });
            }
          }}
        />
        <Link to={{ pathname: `/search/${query}`, state: { query } }}>
          <SearchButton>Search</SearchButton>
        </Link>
      </FormStyle>
    </BannerHome>
  );
};
