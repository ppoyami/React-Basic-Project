import React from 'react';
import styled, { css } from 'styled-components';

const Styledli = styled.li`
  padding: 2rem 4rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  border: 1px solid #d6336c;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #d6336c;
      color: white;
    `}
`;

export default function Item({ item, selected, onClick }) {
  return (
    <Styledli selected={selected} onClick={onClick}>
      {item}
    </Styledli>
  );
}
