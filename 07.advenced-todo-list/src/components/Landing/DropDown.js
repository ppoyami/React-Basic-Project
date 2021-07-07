import React from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

const InlineButton = styled.a`
  font-size: 1.2rem;
  text-transform: uppercase;
`;
const Layout = styled.div`
  position: absolute;
  top: 2rem;
  right: 1rem;
`;

export default function DropDown() {
  return (
    <Layout>
      <InlineButton>
        change account
        <FiChevronDown />
      </InlineButton>
    </Layout>
  );
}
