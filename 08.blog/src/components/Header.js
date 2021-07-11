import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import { selector } from '../modules/loggedInUser';

import SearchBar from './SearchBar';
import ToggleButton from './ToggleButton';
import { useSelector } from 'react-redux';

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

const Menu = styled.div`
  position: absolute;
  right: 10%;
  & > a {
    color: inherit;
    text-decoration: none;
    font-size: 2rem;
    text-transform: uppercase;
    margin-right: 3rem;
    padding-bottom: 0.5rem;
  }

  & > span {
    font-size: 2rem;
    margin-right: 3rem;
  }

  & > a:hover {
    border-bottom: 3px solid dodgerblue;
  }
`;

export default function Header() {
  const history = useHistory();
  const { payload: user } = useSelector(selector);
  console.log(user);
  return (
    <Layout>
      <Title onClick={() => history.push('/')}>Studio.</Title>
      <SubWrapper>
        <SubTitle>IT Solution</SubTitle>
        <SubTitle>Consultancy Firm</SubTitle>
      </SubWrapper>
      <SearchBar />
      <ToggleButton />
      <Menu>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <span style={{ color: 'dodgerblue', fontWeight: 800 }}>
              {user.username}
            </span>
          </>
        ) : (
          <>
            <Link to="/login">login</Link>
            <Link to="/sign-up">sign up</Link>
          </>
        )}
      </Menu>
    </Layout>
  );
}
