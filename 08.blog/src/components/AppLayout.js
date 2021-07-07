import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Layout = styled.div`
  height: 100%;
  position: relative;
  margin-top: 7rem;
`;

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <Layout>{children}</Layout>
    </>
  );
}
