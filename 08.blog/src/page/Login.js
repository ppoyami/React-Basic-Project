import React from 'react';

import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import useInput from '../hooks/useInput';

export default function Login() {
  const [email, onEmail] = useInput('');
  const [password, onPassword] = useInput('');
  return (
    <Layout>
      <Form>
        <InputWrapper>
          <Input
            type="email"
            value={email}
            placeholder="Email"
            onChange={onEmail}
          />
          <Icon>
            <FaUser />
          </Icon>
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={onPassword}
          />
          <Icon>
            <FaKey />
          </Icon>
        </InputWrapper>
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
  width: 25%;
`;
const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  height: 5rem;
  width: 100%;
  outline: none;

  padding-left: 6rem;
  border-radius: 5px;
  font-size: 2rem;

  transition: 0.3s;

  &:focus + i {
    color: tomato;
  }

  &:focus {
    border: 1px solid tomato;
    box-shadow: 0 0 5px tomato;
  }

  &:focus::placeholder {
    visibility: hidden;
  }
`;
const Icon = styled.i`
  position: absolute;
  left: 0;
  top: 0;
  width: 5rem;
  height: 5rem;

  text-align: center;
  line-height: 5rem;

  font-size: 2rem;

  color: #444;
  transition: 0.3s;

  border-radius: 5px 0 0 5px;
`;
