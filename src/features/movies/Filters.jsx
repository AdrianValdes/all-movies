import React from 'react';
import styled from 'styled-components';
import { parseTitle, FilterButton } from '../../app/shared';
import { GenreFilter } from './GenreFilter';

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

export const Filters = ({
  genre,
  filters: { sort, language, original_language, score },
  handleFilters,
  handleSearch,
  setAllGenres,
  allGenres,
}) => (
  <FilterContainer>
    <GenreTitle>{parseTitle(genre)}</GenreTitle>
    <Form onSubmit={handleSearch}>
      <Label>
        <h3>Sort</h3>
        <Select name='sort' value={sort} onChange={handleFilters}>
          <option value='popularity.desc'>Popularity Descending</option>
          <option value='popularity.asc'>Popularity Ascending</option>
          <option value='original_title.asc'>Title (A - Z)</option>
          <option value='original_title.desc'>Title (Z -A) </option>
        </Select>
      </Label>
      <Label>
        <h3>Original Language</h3>
        <Select
          name='original_language'
          value={original_language}
          onChange={handleFilters}
        >
          <option value='en'>English</option>
          <option value='fr'>French</option>
          <option value='de'>German</option>
          <option value='es'>Spanish</option>
          <option value='it'>Italian</option>
          <option value='ja'>Japanese</option>
          <option value='zh'>Chinese</option>
        </Select>
      </Label>
      <Label>
        <h3>Dubbing</h3>
        <Select name='language' value={language} onChange={handleFilters}>
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
        <Select name='score' value={score} onChange={handleFilters}>
          <option value=''>user score</option>
          <option value='vote_average.lte=5'> Less than 50% </option>
          <option value='vote_average.gte=5'>Over 50% </option>
          <option value='vote_average.gte=7'>Over 70%</option>
          <option value='vote_average.gte=8'>Over 80%</option>
          <option value='vote_average.gte=9'>Over 90%</option>
        </Select>
      </Label>
      <GenreFilter allGenres={allGenres} setAllGenres={setAllGenres} />
      <FilterButton type='submit'>Search</FilterButton>
    </Form>
  </FilterContainer>
);
