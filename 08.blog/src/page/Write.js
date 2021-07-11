import React from 'react';
import styled from 'styled-components';

import { FaChevronRight } from 'react-icons/fa';

import Input from '../components/common/Input';
import Button from '../components/common/Button';

export default function Write() {
  return (
    <Layout>
      <Form>
        <Input icon={<FaChevronRight />} type="text" placeholder="TITLE" />
        <TextBox />
        <Button>Submit</Button>
      </Form>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-left: 5rem;
  height: 100vh;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 60%;
`;
const TextBox = styled.textarea`
  width: 100%;
  min-height: 40vh;
  margin-bottom: 5rem;
  font-size: 2rem;
`;
