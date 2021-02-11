import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GrInstagram } from 'react-icons/gr';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import logo from '../assets/images/logo.png';

const StyledFooter = styled.footer`
  background-color: rgb(3, 37, 65);
  color: white;
  display: flex;
  justify-content: center;
`;

const LogoStyle = styled.img`
  width: 100px;
  margin: 0 20px;
`;

const SocialButton = styled.div`
  display: flex;
  padding: 18px 10px;
`;

export const Footer = () => (
  <StyledFooter>
    <LogoStyle src={logo} alt='logo' />
    <p>Follow us on</p>
    <SocialButton>
      <GrInstagram size={20} style={{ marginRight: '10px' }} />
      <FiFacebook size={20} style={{ marginRight: '10px' }} />
      <FiTwitter size={20} style={{ marginRight: '10px' }} />
    </SocialButton>
  </StyledFooter>
);
