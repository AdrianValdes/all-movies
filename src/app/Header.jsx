/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const HeaderContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const UlContainer = styled.ul`
  flex-direction: row;
  padding: 4px 12px;
`;

const NavLink = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: lightseagreen;
  }
`;

// const LogoStyle = styled.img`
// width:
// `

const Input = styled.input`
  border: none;
  outline: none;
`;

export const Header = () => {
  const [input, setInput] = useState('');
  const [, setSearch] = useState();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput('');
  };

  return (
    <HeaderContainer>
      <nav>
        <Link>
          <img src={logo} alt='logo' />
        </Link>
        <UlContainer>
          <NavLink path='/popular'>Popular</NavLink>
          <NavLink path='/genres'>Genres</NavLink>
          <NavLink path='/people'>People</NavLink>
          <NavLink path='/login'>Login</NavLink>
        </UlContainer>
      </nav>
      <div>
        <form autoComplete='off' onSubmit={handleSearch}>
          <Input
            type='text'
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.tartget.value)}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    </HeaderContainer>
  );
};
