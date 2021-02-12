import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IMAGE_BASE_URL_HIGH } from './urls';

const BannerStyle = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.8) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url(${(props) => props.imageUrl});
  width: 100%;
  max-width: 1400px;
  max-height: 360px;
  min-height: 300px;
  height: calc(100vh / 2.5);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
`;

const FormStyle = styled.form`
  width: 90%;
  position: relative;
  border: 1px solid lightgrey;
  border-radius: 20px;
  align-self: flex-start;
  background-color: #fff;
`;

const StyleH2 = styled.h2`
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

const SearchButtom = styled.button`
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
  &:focus {
    background-color: rgb(3, 37, 65);
    outline: none;
    cursor: pointer;
  }
`;

export const HomeBanner = ({ headerImageId }) => {
  const [input, setInput] = useState('');
  const [, setSearch] = useState();
  const inputRef = useRef();

  const imageUrl = `${IMAGE_BASE_URL_HIGH}${headerImageId}`;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput('');
  };

  return (
    <BannerStyle imageUrl={imageUrl}>
      <StyleH2>Welcome to MOVIES!</StyleH2>
      <StyleH3>Explore millions of movies and people now.</StyleH3>
      <FormStyle autoComplete='off' onSubmit={handleSearch}>
        <Input
          type='text'
          ref={inputRef}
          value={input}
          placeholder='Search for a movie or person...'
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchButtom type='submit'>Search</SearchButtom>
      </FormStyle>
    </BannerStyle>
  );
};
