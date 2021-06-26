import React from 'react';
import styled, { css } from 'styled-components';
import { FiCheck } from 'react-icons/fi';

const Wrapper = styled.div`
  width: 90%;
  height: 50px;
  background-color: ${({ theme: { colors } }) => colors.color_primary};
  border-radius: 5px;
  padding: 0 2rem;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ done }) =>
    done &&
    css`
      height: 30px;
      background-color: transparent;
      color: ${({ theme: { colors } }) => colors.color_primary_dark};
      &::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 60%;
        height: 2px;
        background-color: ${({ theme: { colors } }) => colors.color_primary};
      }
    `}
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-family: bold;
`;
const CheckBtn = styled.a`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 1px solid ${({ theme: { colors } }) => colors.color_secondary};

  cursor: pointer;
`;

const Checked = styled(FiCheck)`
  font-size: 2rem;
  color: 1px solid ${({ theme: { colors } }) => colors.color_check};
`;

export default function Item({ title, isDone }) {
  return (
    <Wrapper done={isDone}>
      <Title>{title}</Title>
      {isDone ? <Checked /> : <CheckBtn />}
    </Wrapper>
  );
}
