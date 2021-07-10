import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import SearchBar from './SearchBar';
import ToggleButton from './ToggleButton';

const Layout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  padding: 0 2rem;

  border-bottom: 1px solid #eee;

  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  cursor: pointer;
`;

const SubWrapper = styled.div`
  margin-left: 5rem;
`;
const SubTitle = styled.span`
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
  opacity: 0.7;
`;

export default function Header() {
  const history = useHistory();
  return (
    <Layout>
      <Title onClick={() => history.push('/')}>Studio.</Title>
      <SubWrapper>
        <SubTitle>IT Solution</SubTitle>
        <SubTitle>Consultancy Firm</SubTitle>
      </SubWrapper>
      <SearchBar />
      <ToggleButton />
    </Layout>
  );
}
