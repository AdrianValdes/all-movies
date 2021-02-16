import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.section`
  width: 300px;
  margin: 40px 20px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 20px;
`;

const Select = styled.select`
  border: none;
`;

export const GenreForm = ({ genre }) => {
  const [select, setSelect] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FilterContainer>
      <h2>{genre}</h2>
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
        <button type='submit'>Search</button>
      </Form>
    </FilterContainer>
  );
};
