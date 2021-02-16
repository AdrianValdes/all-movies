import React, { useState } from 'react';
import {
  LoginPageStyle,
  StyleH2,
  StyleNotes,
  StyleForm,
  StyleInput,
  StyleButton,
} from './shared/components';

export const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const validateForm = () => userName.length > 0 && password.length > 4;

  const handleSubmit = (e) => e.preventDefault();

  return (
    <LoginPageStyle>
      <StyleH2>Sign up for an account</StyleH2>
      <StyleNotes>
        Signing up for an account is free and easy. Fill out the form below to
        get started.
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
          <p>Password (4 characters minimum)</p>
          <StyleInput
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor='password'>
          <p>Password Confirm</p>
          <StyleInput
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          <p>Email</p>
          <StyleInput
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <StyleButton type='submit' disabled={!validateForm()}>
          Sign Up
        </StyleButton>
      </StyleForm>
    </LoginPageStyle>
  );
};
