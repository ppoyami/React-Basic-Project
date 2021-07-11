import React from 'react';
import styled from 'styled-components';

import { FaUser, FaLock, FaEnvelope, FaUserLock } from 'react-icons/fa';

import useInputs from '../hooks/useInputs';

import Input from '../components/common/Input';
import Button from '../components/common/Button';

export default function Sign() {
  const [value, onChange] = useInputs({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, passowrd2 } = value;

  return (
    <Layout>
      <Form>
        <Input
          icon={<FaUser />}
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={onChange}
        />
        <Input
          icon={<FaEnvelope />}
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <Input
          icon={<FaLock />}
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <Input
          icon={<FaUserLock />}
          type="password"
          placeholder="check password"
          name="password2"
          value={passowrd2}
          onChange={onChange}
        />
        <Button>Sign Up</Button>
      </Form>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Form = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
