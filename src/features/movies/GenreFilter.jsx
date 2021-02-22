/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 15px;
`;

const GenreButton = styled.li`
  display: inline-flex;
  border: 1px solid #9e9e9e;
  border-radius: 14px;
  padding: 4px 12px;
  font-size: 0.9em;
  margin-right: 6px;
  margin-top: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.className === 'selected' ? 'rgb(1,180,228)' : 'white'};
  color: ${(props) => (props.className === 'selected' ? 'white' : 'black')};
  border-color: ${(props) =>
    props.className === 'selected' ? 'rgba(1,180,228, 1)' : '#9e9e9e'};
`;

export const GenreFilter = ({ allGenres, setAllGenres }) => {
  const handleSelectGenre = (id) => {
    const newGenres = allGenres.map((genre) =>
      genre.id === id ? { ...genre, selected: !genre.selected } : genre
    );
    setAllGenres(newGenres);
  };

  return (
    <div>
      <Container>
        <ul>
          {allGenres.map(({ id, name, selected }) => (
            <GenreButton
              onClick={() => handleSelectGenre(id)}
              key={id}
              className={selected ? 'selected' : ''}
            >
              {name}
            </GenreButton>
          ))}
        </ul>
      </Container>
    </div>
  );
};
