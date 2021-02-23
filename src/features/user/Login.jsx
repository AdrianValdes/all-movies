import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
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
} from '../../app/shared/components';
import { signInUser } from '../../app/store/actions/authActions';

export const FormError = styled.p`
  color: red;
`;

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser({ email, password }));
  };

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

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
            <p>Email</p>
            <StyleInput
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <FormError>
            {error?.code === 'auth/user-not-found' && error?.message}
          </FormError>
          <Label htmlFor='password'>
            <p>Password</p>
            <StyleInput
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <FormError>
            {error?.code === 'auth/wrong-password' && error?.message}
          </FormError>
          <StyleButton type='submit'>Login</StyleButton>
        </StyleForm>
      </Form>
    </LoginPageStyle>
  );
};
