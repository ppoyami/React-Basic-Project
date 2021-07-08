import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  position: fixed;
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 10rem;
`;
const Title = styled.h1`
  width: 40rem;
  font-size: 5rem;
  font-weight: 300;
  margin-bottom: 4rem;
`;
const SubTitle = styled.p`
  font-size: 2rem;
  font-weight: 300;
  text-align: start;
  width: 40rem;
  line-height: 3.5rem;
  letter-spacing: 0.3rem;
`;

export default function Sidebar() {
  return (
    <Layout>
      <div>
        <Title>What's New?</Title>
        <SubTitle>
          where expert and undiscoverd voices can share their writing on any
          topic
        </SubTitle>
      </div>
    </Layout>
  );
}
