import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const Nav = styled.nav`
  background-color: rgb(3, 37, 65);
  display: flex;
  justify-content: center;
  height: 80px;
`;

const SubNav = styled.nav`
  display: flex;
  width: 1400px;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

const StyledLi = styled(Link)`
  padding: 0 5px;
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
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.p`
  display: inline-block;
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    color: lightseagreen;
  }
`;

const SubA = styled(Link)`
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

export const LogoStyle = styled.img`
  width: 100px;
  padding-top: 10px;
  margin: 0 15px;
`;

export const Navbar = () => (
  <Nav>
    <SubNav>
      <Link to='/'>
        <LogoStyle src={logo} alt='logo' />
      </Link>
      <StyledUl>
        <StyledLi to='/popular'>
          <StyledA>Popular</StyledA>
        </StyledLi>
        <DropDownLi>
          <StyledA>Genres</StyledA>
          <DropDownContent>
            <SubA to='/action'>Action</SubA>
            <SubA to='/animation'>Animation</SubA>
            <SubA to='/comedy'>Comedy</SubA>
            <SubA to='/drama'>Drama</SubA>
          </DropDownContent>
        </DropDownLi>
        <StyledLi to='/people'>
          <StyledA>People</StyledA>
        </StyledLi>
        <StyledLi to='/login'>
          <StyledA>Login</StyledA>
        </StyledLi>
      </StyledUl>
    </SubNav>
  </Nav>
);
