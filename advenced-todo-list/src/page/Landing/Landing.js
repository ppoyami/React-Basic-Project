import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DropDown from '../../components/Landing/DropDown';
import UserImage from '../../components/common/UserImage';
import Welcome from '../../components/Landing/Welcome';
import PasswordInput from '../../components/Landing/PasswordInput';
import LoginButton from '../../components/Landing/LoginButton';
import InlineButton from '../../components/common/InlineButton';

const LandingLayout = styled.div`
  position: relative;
  width: 320px;
  height: 530px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.color_primary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Landing() {
  return (
    <LandingLayout>
      <DropDown />
      <UserImage />
      <Welcome username="Arya" />
      <PasswordInput />
      <Link to="/dash">
        <LoginButton />
      </Link>
      <InlineButton>Unable to log in?</InlineButton>
    </LandingLayout>
  );
}
