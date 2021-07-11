import React from 'react';

import { useHistory } from 'react-router';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import useInput from '../hooks/useInput';

import Input from '../components/common/Input';

const Form = styled.form`
  position: absolute;
  left: 40%;
  top: 10%;
  width: 40rem;
  height: 100%;
`;

// MEMO: SearchBar에서 어떻게 상태를 변경할 수 있을까? -> query 만 구성하여 위임한다.
export default function SearchBar() {
  const [query, onChange] = useInput('');

  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    history.push(`/?search=${query}`);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input icon={<FaSearch />} value={query} onChange={onChange} />
    </Form>
  );
}
