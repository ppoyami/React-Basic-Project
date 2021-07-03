import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
} from '../../modules/todos';

import List from './List';

export default function ListContainer({
  match: {
    params: { id },
  },
  history,
}) {
  const parsedId = parseInt(id);

  const todoId = useRef({});

  const todos = useSelector(state => state.todos[parsedId]);
  const dispatch = useDispatch();

  const goBack = history.goBack;

  const onAddTodos = () => {
    dispatch(addTodos(parsedId));
  };

  const onCreateTodo = text => {
    if (!todoId.current[parsedId]) {
      todoId.current[parsedId] = 1;
    }
    const todo = {
      id: todoId.current[parsedId],
      text,
      done: false,
    };
    dispatch(addTodo(parsedId, todo));
    todoId.current[parsedId]++;
  };

  const onToggle = id => {
    dispatch(toggleTodo(parsedId, id));
  };

  const onRemoveTodo = () => {
    dispatch(removeTodo(parsedId, id));
  };

  const onUpdateTodo = (id, text) => {
    dispatch(updateTodo(parsedId, id, text));
  };

  const props = {
    todos,
    onAddTodos,
    goBack,
    onCreateTodo,
    onToggle,
    onRemoveTodo,
    onUpdateTodo,
  };

  return <List {...props} />;
}
