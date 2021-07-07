import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import useInput from '../hooks/useInput';

const Form = styled.form`
  position: absolute;
  left: 40%;
  width: 30rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem;
`;

// TODO: SearchBar에서 어떻게 상태를 변경할 수 있을까?
export default function SearchBar() {
  const [query, onChange] = useInput('');

  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    history.push(`/?query=${query}`);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input value={query} onChange={onChange} />
    </Form>
  );
}
