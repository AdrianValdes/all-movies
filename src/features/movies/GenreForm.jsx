import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.section`
  width: 380px;
  margin: 40px 0 0 40px;
  display: flex;
  flex-direction: column;
`;

const GenreTitle = styled.h1`
  font-size: 35px;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 15px;
`;

const Select = styled.select`
  font-size: 18px;
  border: none;
  background-color: white;
  &:focus {
    outline: none;
  }
  &:option {
    padding: 20px;
  }
`;

const FilterButton = styled.button`
  margin-top: 10px;
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  cursor: pointer;
  height: 45px;
  font-size: 20px;
  font-weight: bold;
  background-color: #47cfb5;
  color: white;
  &:hover {
    background-color: rgb(3, 37, 65);
    outline: none;
    cursor: pointer;
  }
`;
const handleGenre = (title) => title[0].toUpperCase() + title.slice(1);

export const GenreForm = ({ genre }) => {
  const [select, setSelect] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FilterContainer>
      <GenreTitle>{handleGenre(genre)}</GenreTitle>
      <Form onSubmit={handleSubmit}>
        <Label>
          <h3>Sort</h3>
          <Select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value='descending'>Popularity Descending</option>
            <option value='ascending'>Popularity Ascending</option>
            <option value='titleToZ'>Title (A - Z)</option>
            <option value='titleToA'>Title (Z -A) </option>
          </Select>
        </Label>
        <Label>
          <h3>Language</h3>
          <Select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value='english'>English</option>
            <option value='french'>French</option>
            <option value='german'>German</option>
            <option value='spanish'>Spanish</option>
            <option value='italian'>Italian</option>
            <option value='japanese'>Japanese</option>
            <option value='chinese'>Chinese</option>
          </Select>
        </Label>
        <Label>
          <h3>User Score</h3>
          <Select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value='less'> Less than 50% </option>
            <option value='over50'>over 50% </option>
            <option value='over70'>Over 70%</option>
            <option value='over80'>Over 80%</option>
            <option value='over90'>Over 90%</option>
          </Select>
        </Label>
        <FilterButton type='submit'>Search</FilterButton>
      </Form>
    </FilterContainer>
  );
};
