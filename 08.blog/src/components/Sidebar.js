import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import Button from '../components/common/Button';

const Layout = styled.div`
  position: fixed;
  height: 100%;
  width: 45rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  padding: 1rem;
`;
const Title = styled.h1`
  width: 35rem;
  font-size: 5rem;
  font-weight: 300;
  margin-bottom: 4rem;
`;
const SubTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  text-align: start;
  width: 35rem;
  line-height: 3.5rem;
  letter-spacing: 0.3rem;
`;

export default function Sidebar() {
  const history = useHistory();
  const onClick = () => {
    history.push('/write');
  };
  return (
    <Layout>
      <div>
        <Title>What's New?</Title>
        <SubTitle>
          where expert and undiscoverd voices can share their writing on any
          topic
        </SubTitle>
      </div>
      <Button onClick={onClick}>Write!</Button>
    </Layout>
  );
}
