import React from 'react';
import styled from 'styled-components';

export default function Button({ children, ...other }) {
  return <StyledBtn {...other}>{children}</StyledBtn>;
}

const StyledBtn = styled.button`
  font-weight: 800;
  font-size: 2rem;
  padding: 1.5rem 7rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.reverseBgColor};
  color: ${({ theme }) => theme.reverseTextColor};

  align-self: center;
`;
