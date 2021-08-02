import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaUser, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import useInputs from '../hooks/useInputs';

import { selector } from '../modules/loggedInUser';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

export default function Profile() {
  const { payload: user } = useSelector(selector);

  const [value, onChange] = useInputs({
    username: user.username,
    email: user.email,
    phone: user.phone,
  });

  const { username, email, phone } = value;

  return (
    <Layout>
      <UserImage>{username[0].toUpperCase()}</UserImage>
      <Form>
        <Input
          icon={<FaUser />}
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onChange}
        />
        <Input
          icon={<FaEnvelope />}
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <Input
          icon={<FaPhoneAlt />}
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={phone}
          onChange={onChange}
        />
        <Button>UPDATE</Button>
      </Form>
    </Layout>
  );
}

const Layout = styled.div`
  padding: 10rem;
`;

const Form = styled.form`
  width: 30%;
`;

const UserImage = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: #845ef7;
  font-size: 3rem;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;
