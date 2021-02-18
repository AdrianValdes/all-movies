import styled from 'styled-components';

const Button = styled.button`
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 20px;
  height: 46px;
  font-weight: bold;
  &:hover {
    background-color: rgb(3, 37, 65);
    outline: none;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled(Button)`
  position: absolute;
  right: -3px;
  top: 1px;
  height: 49px;
  background-color: #47cfb5;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 10px 26px;
  background: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );
  &:a {
    color: white;
  }
`;

export const AddReviewButton = styled(Button)`
  width: 180px;
  margin: 40px 40px 40px 150px;
  padding: 10px 15px;
  background-color: ${(props) => (props.disabled ? 'gray' : '#1cb8da')};
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const FilterButton = styled(Button)`
  margin-top: 10px;
  padding: 10px 15px;
  height: 45px;
  background-color: ${(props) => (props.disabled ? 'gray' : '#1cb8da')};
`;
