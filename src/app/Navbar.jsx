import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const Nav = styled.nav`
  background-color: rgb(3, 37, 65);
  display: flex;
  justify-content: center;
  height: 90px;
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

const StyledLi = styled.li`
  padding: 0 5px;
  float: left;
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
  font-size: 16px;
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
  width: 80px;
  padding: 20px 0;
  margin-right: 15px;
`;

export const Navbar = () => (
  <Nav>
    <SubNav>
      <Link to='/'>
        <LogoStyle src={logo} alt='logo' />
      </Link>
      <StyledUl>
        <StyledLi>
          <Link to='/popular'>
            <StyledA>Popular</StyledA>
          </Link>
        </StyledLi>
        <DropDownLi>
          <StyledA>Genres</StyledA>
          <DropDownContent>
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
    </SubNav>
  </Nav>
);
