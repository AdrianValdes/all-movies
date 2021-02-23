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
} from '../../app/shared/components';
import { signUpUser } from '../../app/store/actions';
import { FormError } from './Login';

const validateForm = ({ name, password, email }) =>
  name.length > 1 && password.length > 6 && email.length > 4;

export const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.user);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signUpUser({ email, password, displayName: name }));
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
          <FormError>
            {error?.code === 'auth/email-already-in-use' && error.message}
          </FormError>
          <StyleButton
            type='submit'
            disabled={!validateForm({ name, password, email })}
          >
            Sign Up
          </StyleButton>
        </StyleForm>
      </Form>
    </LoginPageStyle>
  );
};
