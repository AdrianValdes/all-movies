import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { BannerHome } from './shared/components';
import { IMAGE_BASE_URL_HIGH } from './urls';

const FormStyle = styled.form`
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
    cursor: pointer;
  }
`;

const SearchButton = styled.button`
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
  const [input, setInput] = useState('');
  const [, setSearch] = useState();
  const inputRef = useRef();

  let imageUrl;
  if (headerImageId) {
    imageUrl = `${IMAGE_BASE_URL_HIGH}${headerImageId}`;
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput('');
  };

  return (
    <BannerHome imageUrl={imageUrl}>
      <StyleH1>Welcome to MOVIES!</StyleH1>
      <StyleH3>Explore millions of movies and people now.</StyleH3>
      <FormStyle autoComplete='off' onSubmit={handleSearch}>
        <Input
          type='text'
          ref={inputRef}
          value={input}
          placeholder='Search for a movie or person...'
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchButton type='submit'>Search</SearchButton>
      </FormStyle>
    </BannerHome>
  );
};
