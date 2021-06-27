import React from 'react';
import styled from 'styled-components';

const Button = styled.span`
  padding: 1rem 3rem;
  background-color: ${({ theme: { colors } }) => colors.color_text};
  color: #fff;
  cursor: pointer;

  text-transform: uppercase;
  letter-spacing: 2px;
`;
export default function LoginButton() {
  return <Button>log in</Button>;
}
