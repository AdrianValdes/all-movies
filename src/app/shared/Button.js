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
