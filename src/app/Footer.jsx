import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Instagram, Facebook, Twitter } from '@styled-icons/boxicons-logos';
import logo from '../assets/images/logo.png';
import { LogoStyle } from './Navbar';

const StyledFooter = styled.footer`
  width: 100%;
  background-color: rgb(3, 37, 65);
  color: white;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const StyleP = styled.p`
  padding-top: 35px;
`;

const SocialButton = styled.div`
  display: flex;
  padding: 30px 15px;
`;

const InstagramLogo = styled(Instagram)`
  margin-right: '10px';
  width: 30px;
  height: 30px;
`;
const FacebookLogo = styled(Facebook)`
  margin-right: '10px';
  width: 30px;
  height: 30px;
`;
const TwitterLogo = styled(Twitter)`
  margin-right: '10px';
  width: 30px;
  height: 30px;
`;
export const Footer = () => (
  <StyledFooter>
    <Link to='/'>
      <LogoStyle src={logo} alt='logo' />
    </Link>
    <StyleP>Follow us on</StyleP>
    <SocialButton>
      <InstagramLogo />
      <FacebookLogo />
      <TwitterLogo />
    </SocialButton>
  </StyledFooter>
);
