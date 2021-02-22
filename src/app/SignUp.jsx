import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Form,
  Label,
  LoginPageStyle,
  StyleH2,
  StyleNotes,
  StyleForm,
  StyleInput,
  StyleButton,
} from './shared/components';
import { signUpUser } from './store/actions/authActions';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const validateForm = () => name.length > 0 && password.length > 4;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ email, password, displayName: name }));
    setEmail('');
    setPassword('');
    setName('');
  };
  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

  return (
    <LoginPageStyle>
      <Form>
        <StyleH2>Sign up for an account</StyleH2>
        <StyleNotes>
          Signing up for an account is free and easy. Fill out the form below to
          get started.
        </StyleNotes>

        <StyleForm autoComplete='off' onSubmit={handleSubmit}>
          <Label htmlFor='user-name'>
            <p>Username</p>
            <StyleInput
              id='user-name'
              type='userName'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Label>
          <Label htmlFor='password'>
            <p>Password (6 characters minimum)</p>
            <StyleInput
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <Label htmlFor='email'>
            <p>Email</p>
            <StyleInput
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <StyleButton type='submit' disabled={!validateForm()}>
            Sign Up
          </StyleButton>
        </StyleForm>
      </Form>
    </LoginPageStyle>
  );
};
