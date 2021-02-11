/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-indent */
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(3, 37, 65);
  display: flex;
  padding: 4px 20px;
`;

const StyledLi = styled.li`
  padding: 10px;
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    color: lightseagreen;
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  font-size: 20px;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    color: lightseagreen;
  }
`;

const SubA = styled.a`
  color: rgb(3, 37, 65);
  padding: 10px 12px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    color: white;
    background-color: rgba(3, 37, 65, 0.7);
  }
`;

const LogoStyle = styled.img`
  width: 100px;
`;

export const Navbar = () => (
  <StyledUl>
    <Link to='/'>
      <LogoStyle src={logo} alt='logo' />
    </Link>
    <StyledLi>
      <Link to='/popular'>
        <StyledA>Popular</StyledA>
      </Link>
    </StyledLi>
    <DropDownLi>
      <Dropbtn>Genres</Dropbtn>
      <DropDownContent>
        {' '}
        <SubA>Action</SubA>
        <SubA>Animation</SubA>
        <SubA>Comedy</SubA>
        <SubA>Drama</SubA>
      </DropDownContent>
    </DropDownLi>
    <StyledLi>
      <Link to='/people'>
        <StyledA>People</StyledA>
      </Link>
    </StyledLi>
    <StyledLi>
      <Link to='/login'>
        <StyledA>Login</StyledA>
      </Link>
    </StyledLi>
  </StyledUl>
);
