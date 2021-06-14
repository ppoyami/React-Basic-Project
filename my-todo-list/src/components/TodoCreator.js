import { useState } from "react";
import styled, { css } from "styled-components";
import { FaCheckSquare } from "react-icons/fa";
import Notification from "./Notification";
import { useDispatchContext, useIdContext, useStateContext } from "../context";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Form = styled.form`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: white;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px ${({ theme }) => theme.colors.primary_dark};

  transition: width 0.5s ease-in;
  /* animation */
  ${({ expendible }) =>
    expendible &&
    css`
      width: 100%;
    `}
`;

const ToggleBtn = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background: white;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.8rem;
  & > * {
    filter: invert(24%) sepia(76%) saturate(2337%) hue-rotate(223deg)
      brightness(87%) contrast(88%);
  }
`;

const FlexContainer = styled.div`
  position: relative;
  height: 60px;
  left: 60px;

  display: flex;
  align-items: center;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 10px 0;
  border: none;
  outline: none;
  font-size: 18px;
`;

const Remover = styled.span``;

function TodoCreator({ expendible, onToggle }) {
  const [text, setText] = useState("");
  const dispatch = useDispatchContext();
  const id = useIdContext();
  const todos = useStateContext();

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: ++id.current,
      text,
      done: false
    };
    dispatch({ type: "CREATE", todo });
    setText("");
  };
  return (
    <Container expendible={expendible}>
      <Notification expendible={expendible}>
        {todos.filter((todo) => !todo.done).length}
      </Notification>
      <Form expendible={expendible} onSubmit={onSubmit}>
        <ToggleBtn onClick={onToggle}>
          <FaCheckSquare />
        </ToggleBtn>
        <FlexContainer>
          <Input value={text} onChange={onChange} />
          <Remover />
        </FlexContainer>
      </Form>
    </Container>
  );
}

export default TodoCreator;
