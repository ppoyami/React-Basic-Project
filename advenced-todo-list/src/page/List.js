import React from 'react';
import styled from 'styled-components';

import BackButton from '../components/List/BackButton';
import More from '../components/List/More';
import Item from '../components/List/Item';

const Layout = styled.div`
  position: relative;
  width: 320px;
  height: 530px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.color_primary_light2};
`;
const Header = styled.header`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;
const Body = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export default function List() {
  return (
    <Layout>
      <Header>
        <BackButton />
        <More />
      </Header>
      <Body>
        <Item title="Walder Fray" isDone={true} />
        <Item title="The Hound" isDone={false} />
        <Item title="Cersel Lannister" isDone={false} />
      </Body>
    </Layout>
  );
}
