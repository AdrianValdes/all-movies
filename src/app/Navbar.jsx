import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo1.png';

import {
  actionUrl,
  animationUrl,
  comediesUrl,
  documentaryUrl,
  dramaUrl,
  horrorUrl,
  popularUrl,
  romanceUrl,
  showsUrl,
} from './shared';
import { NavSearch } from './NavSearch';
import { Avatar } from '../features/user/Avatar';

const Nav = styled.nav`
  background-color: rgb(3, 37, 65);
  display: flex;
  justify-content: center;
  height: 60px;
`;

const SubNav = styled.div`
  display: flex;
  width: 1400px;
  padding: 0 40px;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledLi = styled.div`
  padding: 0 5px;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  border-radius: 5px;
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
  font-weight: 600;
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 0px 16px;
  margin-top: 5px;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    color: lightseagreen;
  }
`;

const SubA = styled.div`
  color: rgb(3, 37, 65);
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: rgba(3, 3, 3, 0.1);
  }
`;

export const LogoStyle = styled.img`
  width: 200px;
  margin: 3px 15px 0 15px;
`;

export const Navbar = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Nav>
      <SubNav>
        <Link to='/'>
          <LogoStyle src={logo} alt='logo' />
        </Link>
        <StyledUl>
          <StyledLi>
            <Link
              to={{
                pathname: '/genre/popular',
                state: { genreUrl: popularUrl },
              }}
            >
              <StyledA>Popular</StyledA>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link
              to={{
                pathname: '/genre/tvshows',
                state: { genreUrl: showsUrl },
              }}
            >
              <StyledA>TV Shows</StyledA>
            </Link>
          </StyledLi>
          <DropDownLi>
            <StyledA>Genres</StyledA>
            <DropDownContent>
              <Link
                to={{
                  pathname: '/genre/action',
                  state: { genreUrl: actionUrl },
                }}
              >
                <SubA>Action</SubA>
              </Link>
              <Link
                to={{
                  pathname: '/genre/animation',
                  state: { genreUrl: animationUrl },
                }}
              >
                <SubA>Animation</SubA>
              </Link>
              <Link
                to={{
                  pathname: '/genre/comedy',
                  state: { genreUrl: comediesUrl },
                }}
              >
                <SubA>Comedy</SubA>
              </Link>
              <Link
                to={{
                  pathname: '/genre/documentary',
                  state: { genreUrl: documentaryUrl },
                }}
              >
                <SubA>Documentary</SubA>
              </Link>
              <Link
                to={{
                  pathname: '/genre/drama',
                  state: { genreUrl: dramaUrl },
                }}
              >
                <SubA>Drama </SubA>
              </Link>
              <Link
                to={{
                  pathname: '/genre/horror',
                  state: { genreUrl: horrorUrl },
                }}
              >
                <SubA>Horror </SubA>
              </Link>
              <Link
                to={{
                  pathname: '/genre/romance',
                  state: { genreUrl: romanceUrl },
                }}
              >
                <SubA>Romance </SubA>
              </Link>
            </DropDownContent>
          </DropDownLi>
          <StyledLi className='push'>
            <Link to='/people'>
              <StyledA>People</StyledA>
            </Link>
          </StyledLi>

          <StyledLi>
            <NavSearch />
          </StyledLi>
          <StyledLi>
            {user ? (
              <Avatar />
            ) : (
              <Link to='/login'>
                <StyledA>Login</StyledA>
              </Link>
            )}
          </StyledLi>
        </StyledUl>
      </SubNav>
    </Nav>
  );
};
