import React, { useState } from 'react';
import styled from 'styled-components';

import { FiPlus } from 'react-icons/fi';

import UserImage from '../components/common/UserImage';
import Username from '../components/DashBoard/Name';
import Search from '../components/DashBoard/Search';
import Board from '../components/DashBoard/Board';
import InlineButton from '../components/common/InlineButton';
import Creator from '../components/DashBoard/Creator';

import { useStateContext } from '../context';

const Layout = styled.div`
  position: relative;
  width: 320px;
  height: 530px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
`;
const Header = styled.header`
  width: 100%;
  height: 17%;
  background-color: ${({ theme: { colors } }) => colors.color_primary};
  padding: 0 2rem;

  display: flex;
  align-items: center;
`;
const Body = styled.main`
  width: 100%;
  height: 83%;
  background-color: ${({ theme: { colors } }) => colors.color_primary_light2};
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const StyledUserImage = styled(UserImage)`
  width: 6rem;
  height: 6rem;
  font-size: 3rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const StyledInlineButton = styled(InlineButton)`
  position: static;
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.color_text};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.color_text};
  align-self: flex-start;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

export default function DashBoard({ history }) {
  const [popUp, setPopUp] = useState(false);
  const { collections } = useStateContext();
  const goHome = () => {
    history.push('/');
  };
  return (
    <Layout>
      <Header>
        <StyledUserImage onClick={goHome} />
        <Username username="Ayra" />
        <Search />
      </Header>
      <Body>
        {/* collection rendering... */}
        {collections.map(({ id, title }) => (
          <Board key={id} id={id} title={title} count="3" />
        ))}
        {/* calcRemains를 각 Board 마다 실행해서 결과받아 표시 */}
        <StyledInlineButton>
          <span onClick={() => setPopUp(true)}>
            <FiPlus /> Add New Collection
          </span>
        </StyledInlineButton>
      </Body>
      <Creator show={popUp} close={() => setPopUp(false)} />
    </Layout>
  );
}
