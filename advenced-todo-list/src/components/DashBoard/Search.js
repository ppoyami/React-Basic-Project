import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const Wrapper = styled.div`
  font-size: 2.8rem;
  transform: translateY(3px);
  cursor: pointer;
`;

export default function Search() {
  return (
    <Wrapper>
      <FiSearch />
    </Wrapper>
  );
}
