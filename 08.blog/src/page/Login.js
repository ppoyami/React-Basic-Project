import React from 'react';

import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';

import Input from '../components/common/Input';
import Button from '../components/common/Button';
import useInput from '../hooks/useInput';

export default function Login() {
  const [email, onEmail] = useInput('');
  const [password, onPassword] = useInput('');

  const onSubmit = e => {
    e.preventDefault();
  };

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
