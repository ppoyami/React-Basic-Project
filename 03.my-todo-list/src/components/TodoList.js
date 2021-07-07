import styled, { css, keyframes } from "styled-components";
import TodoItem from "./TodoItem";
import { useStateContext } from "../context";

const List = styled.ul`
  list-style: none;
  /* background: white; */
  width: 100%;
  height: 25rem;
  overflow: auto;
  margin-top: 3rem;
  padding-left: 0.6rem;
  display: none;
  opacity: 0;

  animation-delay: 500ms;
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  ${({ expendible }) =>
    expendible &&
    css`
      display: block;
      animation-name: ${ListAnimation};
    `}
`;

const ListAnimation = keyframes`
  0 {
    opacity: .1;
  }
  50% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
`;

function TodoList({ expendible }) {
  const todos = useStateContext();
  return (
    <List expendible={expendible}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
}

export default TodoList;
