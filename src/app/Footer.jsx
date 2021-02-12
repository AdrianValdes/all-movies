import React from 'react';
import styled from 'styled-components';
import { GrInstagram } from 'react-icons/gr';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import logo from '../assets/images/logo.png';

const StyledFooter = styled.footer`
  background-color: rgb(3, 37, 65);
  color: white;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const LogoStyle = styled.img`
  width: 100px;
  margin: 0 20px;
`;

const StyleP = styled.p`
  padding-top: 20px;
`;

const SocialButton = styled.div`
  display: flex;
  padding: 20px 15px;
`;

export const Footer = () => (
  <StyledFooter>
    <LogoStyle src={logo} alt='logo' />
    <StyleP>Follow us on</StyleP>
    <SocialButton>
      <GrInstagram size={20} style={{ marginRight: '10px' }} />
      <FiFacebook size={20} style={{ marginRight: '10px' }} />
      <FiTwitter size={20} style={{ marginRight: '10px' }} />
    </SocialButton>
  </StyledFooter>
);
