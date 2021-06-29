import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FiCheck } from 'react-icons/fi';

import { toggleTodo, removeTodo, updateTodo } from '../../reducer';
import { useDispatchContext } from '../../context';

import { FiTrash } from 'react-icons/fi';
import useInput from '../../hooks/useInput';

const Wrapper = styled.div`
  width: 90%;
  height: 50px;
  background-color: ${({ theme: { colors } }) => colors.color_primary};
  border-radius: 5px;
  padding: 0 2rem;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;

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
  margin-right: auto;
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

const Remover = styled(FiTrash)`
  font-size: 1.8rem;
  transition: all 0.3s ease;
  margin-left: 1rem;
  &:hover {
    color: tomato;
  }
`;

const UpdateInput = styled.input``;

export default function Item({ id, title, isDone, searchId }) {
  const dispatch = useDispatchContext();
  const [update, setUpdate] = useState(false);
  const [updateText, onChange] = useInput(title);

  const onToggle = () => {
    dispatch(toggleTodo(searchId, id));
  };

  const onRemoveTodo = () => {
    dispatch(removeTodo(searchId, id));
  };

  const onUpdateTodo = e => {
    console.log(e.key);
    if (e.key === 'Enter') {
      console.log('update');
      dispatch(updateTodo(searchId, id, updateText));
      setUpdate(prev => !prev);
    }
  };
  return (
    <Wrapper done={isDone} onDoubleClick={() => setUpdate(prev => !prev)}>
      {update ? (
        <UpdateInput
          value={updateText}
          onChange={onChange}
          onKeyPress={onUpdateTodo}
        />
      ) : (
        <Title>{title}</Title>
      )}

      {isDone ? (
        <Checked onClick={onToggle} />
      ) : (
        <CheckBtn onClick={onToggle} />
      )}
      <Remover onClick={onRemoveTodo} />
    </Wrapper>
  );
}
