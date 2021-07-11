import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';

import Input from '../components/common/Input';
import Button from '../components/common/Button';
import useInput from '../hooks/useInput';

import { login } from '../api/index';
import * as L from '../modules/loggedInUser';

const requestLogin = async (email, password, dispatch) => {
  try {
    dispatch(L.creatorLoading());
    const user = await login(email, password);
    dispatch(L.creatorSuccess(user));
  } catch (e) {
    dispatch(L.creatorError(e));
  }
};

export default function Login() {
  const [email, onEmail] = useInput('');
  const [password, onPassword] = useInput('');
  const dispatch = useDispatch();
  const { loading, payload, error } = useSelector(L.selector);

  const onSubmit = e => {
    e.preventDefault();
    requestLogin(email, password, dispatch);
  };

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error</span>;
  if (payload) return <Redirect to="/" />;

  return (
    <Layout>
      <Form onSubmit={onSubmit}>
        <Input
          icon={<FaUser />}
          type="email"
          value={email}
          placeholder="Email"
          onChange={onEmail}
        />
        <Input
          icon={<FaKey />}
          type="password"
          value={password}
          placeholder="Password"
          onChange={onPassword}
        />
        <Button>Login</Button>
      </Form>
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
