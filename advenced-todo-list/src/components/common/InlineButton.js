import React from 'react';
import styled from 'styled-components';

const TextButton = styled.a`
  position: absolute;
  bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 800;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => colors.color_primary_dark};
  color: ${({ theme: { colors } }) => colors.color_fail};
  cursor: pointer;
`;
export default function InlineButton({ className, children }) {
  return <TextButton className={className}>{children}</TextButton>;
}
