import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GrInstagram } from 'react-icons/gr';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
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
  padding-top: 30px;
`;

const SocialButton = styled.div`
  display: flex;
  padding: 30px 15px;
`;

export const Footer = () => (
  <StyledFooter>
    <Link to='/'>
      <LogoStyle src={logo} alt='logo' />
    </Link>
    <StyleP>Follow us on</StyleP>
    <SocialButton>
      <GrInstagram size={20} style={{ marginRight: '10px' }} />
      <FiFacebook size={20} style={{ marginRight: '10px' }} />
      <FiTwitter size={20} style={{ marginRight: '10px' }} />
    </SocialButton>
  </StyledFooter>
);
