import React from 'react';
import styled from 'styled-components';

const Username = styled.span`
  font-size: 1.7rem;
  font-weight: 800;
  margin-right: auto;
`;

export default function Name({ username }) {
  return <Username>{username}</Username>;
}
