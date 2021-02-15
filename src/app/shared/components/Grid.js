import styled from 'styled-components';

export const MoviesGridContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 30px;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  max-width: 1200px;
  width: 100%;
  gap: 40px 0;
`;
