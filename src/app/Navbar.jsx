/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

// const NavContainer = styled.nav`
//   width: 100%;
//   display: flex;
//   padding: 0 12px;
//   background-color: rgb(3, 37, 65);
//   position: relative;
//   display: inline-block;
//   $:hover {
//     display: block;
//   }
// `;

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  padding: 0 12px;
  background-color: rgb(3, 37, 65);
`;

const NavLink = styled.a`
  padding: 20px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: lightseagreen;
  }
`;

const LogoStyle = styled.img`
  width: 100px;
`;
const Genre = styled.span`
  &:hover {
    color: red;
  }
  &:hover .genre {
    display: block;
  }
`;
const GenreChoices = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  ${Genre}:hover & {
    display: block;
  }
`;

const GenreLink = styled.a`
  color: black
  padding: 4px 8px;
  display: block;
  text-decoration: none;
  &:hover {
    background-color: #f1f1f1;
  }

`;

export const Navbar = () => (
  <NavContainer>
    <Link to='/'>
      <LogoStyle src={logo} alt='logo' />
    </Link>
    <NavLink path='/popular'>Popular</NavLink>
    <div to='/g'>
      <Genre>Genres</Genre>
      <GenreChoices className='genre'>
        <GenreLink to='/action'>Action</GenreLink>
        <GenreLink to='/animation'>Animation</GenreLink>
        <GenreLink to='/comedy'>Comedy</GenreLink>
        <GenreLink to='/drama'>Drama</GenreLink>
        <GenreLink to='/fantacy'>Fantasy</GenreLink>
        <GenreLink to='/horrow'>Horror</GenreLink>
        <GenreLink to='/romance'>Romance</GenreLink>
        <GenreLink to='/thriller'>Thriller</GenreLink>
      </GenreChoices>
    </div>
    <NavLink path='/people'>People</NavLink>
    <NavLink path='/login'>Login</NavLink>
  </NavContainer>
);
