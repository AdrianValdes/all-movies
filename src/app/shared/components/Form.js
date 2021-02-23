/* eslint-disable indent */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import star from '../../../assets/images/star.jpg';

export const LoginPageStyle = styled.div`
  width: 100%;
  height: calc(100vh - 190px);
  background-image: url(${star});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Form = styled.div`
  width: 80%;
  margin: 80px auto;
  position: absolute;
  right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 2px 34px 2px rgba(8, 48, 82, 0.73);
  padding: 10px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const StyleH2 = styled.h2`
  font-size: 30px;
  margin: 30px 0;
`;

export const StyleNotes = styled.p`
  margin: 10px 20px 20px 20px;
  line-height: 30px;
  font-size: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const StyleLink = styled(Link)`
  color: midnightblue;
  font-weight: bold;
  &:hover {
    background-color: midnightblue;
    color: white;
  }
`;

export const StyleForm = styled.form`
  width: 80%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const StyleInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid lightgrey;
  border-radius: 10px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

export const StyleButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(props) =>
    props.disabled ? 'darkgray' : 'rgb(8, 48, 82)'};
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 60px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'none' : 'rgba(8, 48, 82, 0.8)'};
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
