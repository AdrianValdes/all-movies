import React, { useState } from 'react';
import {
  Form,
  Label,
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
      <Form>
        <StyleH2>Login to your account</StyleH2>
        <StyleNotes>
          In order to use the editing and rating capabilities of MOVIES, as well
          as get personal recommendations, please login to your account. If you
          do not have an account, registering for an account is free and simple.
          <StyleLink to='/signup'>&nbsp;Click here.</StyleLink>
        </StyleNotes>

        <StyleForm autoComplete='off' onSubmit={handleSubmit}>
          <Label htmlFor='user-name'>
            <p>Username</p>
            <StyleInput
              id='user-name'
              type='userName'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Label>
          <Label htmlFor='password'>
            <p>Password</p>
            <StyleInput
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <StyleButton type='submit'>Login</StyleButton>
        </StyleForm>
      </Form>
    </LoginPageStyle>
  );
};
