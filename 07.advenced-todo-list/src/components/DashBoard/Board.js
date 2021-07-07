import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  width: 90%;
  height: 70px;
  background-color: ${({ theme: { colors } }) => colors.color_primary};
  border-radius: 5px;
  padding: 0 2rem;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1``;
const Progress = styled.span`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: cadetblue;
  border-radius: 50%;
  border: 3px solid gray;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Board({ id, title, getCount }) {
  const count = getCount(id);
  return (
    <Wrapper to={`/list/${id}`}>
      <Title>{title}</Title>
      <Progress>{count}</Progress>
    </Wrapper>
  );
}
