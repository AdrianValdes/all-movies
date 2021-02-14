import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginPageStyle = styled.div`
    width: 80%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
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
    line-height: 22px;
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
    height: 30px;
    padding-left: 10px;
    margin: 10px 0;
    border-radius: 10px;
    &:focus {
      outline: none;
    }
`;

export const StyleButton = styled.button`
    width: 100%;
    height: 30px;
    background-color: rgb(8, 48, 82);
    color: white;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 60px;
    &:hover {
        background-color: rgba(8, 48, 82, 0.8);
        outline: none;  
    }
`;
