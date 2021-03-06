import styled from 'styled-components';

export const Card = styled.div`
  width: 150px;
  min-width: 150px;
  margin-left: 40px;
`;
export const CastCard = styled(Card)`
  margin-left: 25px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  color: black;
  height: 100%;
`;
export const MovieGridCard = styled.div`
  width: 180px;
  min-width: 160px;
  margin-left: 40px;
  color: black;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 10px;
  height: 100%;
`;

export const SearchCard = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(227, 227, 227, 1);
  background-color: #fff;
  display: flex;
  margin: 20px 0;
  color: #000;
`;
