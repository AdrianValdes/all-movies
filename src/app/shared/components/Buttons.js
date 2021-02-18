import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 14px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
`;

export const PrimaryButton = styled(Button)`
  border: none;
  color: white;
  background-color: #030086;
`;

export const SecondaryButton = styled(Button)`
  background-color: none;
  border: 2px solid #030086;
  color: #030086;
`;

export const TertiaryButton = styled(Button)`
  background-color: none;
  border: none;
  color: #030086;
`;
export const AddReviewButton = styled.button`
  width: 180px;
  height: 45px;
  margin: 40px 40px 40px 150px;
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  cursor: pointer;
  background-color: #47cfb5;
  color: white;
  font-size: 18px;
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
