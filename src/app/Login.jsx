import React, { useState } from 'react';
import {
  LoginPageStyle,
  StyleH2,
  StyleNotes,
  StyleLink,
  StyleForm,
  StyleInput,
  StyleButton,
} from './shared/components';

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginPageStyle>
      <StyleH2>Login to your account</StyleH2>
      <StyleNotes>
        In order to use the editing and rating capabilities of MOVIES, as well
        as get personal recommendations, please login to your account. If you do
        not have an account, registering for an account is free and simple.
        <StyleLink to='/signup'>&nbsp;Click here.</StyleLink>
      </StyleNotes>

      <StyleForm autoComplete='off' onSubmit={handleSubmit}>
        <label htmlFor='user-name'>
          <p>Username</p>
          <StyleInput
            id='user-name'
            type='userName'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor='password'>
          <p>Password</p>
          <StyleInput
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <StyleButton type='submit'>Login</StyleButton>
      </StyleForm>
    </LoginPageStyle>
  );
};
