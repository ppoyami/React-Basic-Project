import React from 'react';
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

const Layout = styled.div`
  font-size: 4rem;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.color_primary_light};
`;

export default function UserImage(props) {
  return (
    <Layout className={props.className} onClick={props.onClick}>
      <FiUser />
    </Layout>
  );
}
