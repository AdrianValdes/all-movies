import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import movie from '../assets/images/movie.jpg';

const BannerStyle = styled.div`
  background-image: url(${movie});
  width: 100vw;
  height: 250px;
  background-size: cover;
  background-repeat: none;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  opacity: 0.8;
`;

const FormStyle = styled.form`
  width: 90%;
  position: relative;
  border: 1px solid lightgrey;
  border-radius: 20px;
  align-self: flex-start;
  background-color: white;
`;

const StyleH2 = styled.h2`
  align-self: flex-start;
  font-size: 40px;
  color: white;
  margin-bottom: 0px;
`;

const StyleH3 = styled.h3`
  align-self: flex-start;
  font-size: 25px;
  margin-top: 0px;
  color: white;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  height: 35px;
  padding: 10px 15px;
  font-size: 15px;
  border-radius: 20px;
  &:focus {
    outline: none;
    cursor: pointer;
  }
`;

const SearchButtom = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  position: absolute;
  right: 0px;
  font-weight: 700;
  background-color: rgb(72, 172, 196);
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
  console.log(headerImageId);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput('');
  };

  return (
    <BannerStyle>
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
