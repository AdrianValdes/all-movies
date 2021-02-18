import React from 'react';
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
  &:focus {
    outline: none;
  }
`;
const handleGenre = (title) => title[0].toUpperCase() + title.slice(1);

export const GenreFilters = ({
  genre,
  filters,
  handleFilters,
  handleSearch,
}) => (
  <FilterContainer>
    <GenreTitle>{handleGenre(genre)}</GenreTitle>
    <Form onSubmit={handleSearch}>
      <Label>
        <h3>Sort</h3>
        <Select name='sort' value={filters.sort} onChange={handleFilters}>
          <option value='popularity.desc'>Popularity Descending</option>
          <option value='popularity.asc'>Popularity Ascending</option>
          <option value='original_title.asc'>Title (A - Z)</option>
          <option value='original_title.desc'>Title (Z -A) </option>
        </Select>
      </Label>
      <Label>
        <h3>Language</h3>
        <Select
          name='language'
          value={filters.language}
          onChange={handleFilters}
        >
          <option value='en-US'>English</option>
          <option value='fr'>French</option>
          <option value='de'>German</option>
          <option value='es'>Spanish</option>
          <option value='it'>Italian</option>
          <option value='ja'>Japanese</option>
          <option value='zh'>Chinese</option>
        </Select>
      </Label>
      <Label>
        <h3>User Score</h3>
        <Select name='score' value={filters.score} onChange={handleFilters}>
          <option value=''>user score</option>
          <option value='vote_average.lte=5'> Less than 50% </option>
          <option value='vote_average.gte=5'>over 50% </option>
          <option value='vote_average.gte=7'>Over 70%</option>
          <option value='vote_average.gte=8'>Over 80%</option>
          <option value='vote_average.gte=9'>Over 90%</option>
        </Select>
      </Label>
      <FilterButton type='submit'>Search</FilterButton>
    </Form>
  </FilterContainer>
);
