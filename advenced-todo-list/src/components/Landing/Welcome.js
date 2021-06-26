import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
const TextHeader = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;
const TextBody = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
`;

export default function Welcome({ username }) {
  return (
    <Layout>
      <TextHeader>Welcome Back,</TextHeader>
      <TextBody>{username}</TextBody>
    </Layout>
  );
}
