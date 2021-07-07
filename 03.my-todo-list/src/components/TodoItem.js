import styled, { css } from "styled-components";
import CheckBtn from "./CheckBtn";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatchContext } from "../context";

const ItemContainer = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  & > div {
    width: 80%;
    display: flex;
    align-items: center;
    margin-right: auto;
  }
`;
const Text = styled.span`
  position: relative;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray_light};
  margin-left: 1rem;
  padding-top: 0.3rem;

  ${({ done, theme }) =>
    done &&
    css`
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        background: ${theme.colors.gray_dark};
      }
    `}
`;

const Remover = styled.i`
  font-size: 2rem;
  cursor: pointer;
  filter: invert(89%) sepia(8%) saturate(186%) hue-rotate(169deg)
    brightness(99%) contrast(83%);

  &:hover {
    filter: invert(21%) sepia(17%) saturate(331%) hue-rotate(169deg)
      brightness(94%) contrast(94%);
  }
`;

function TodoItem({ todo: { id, text, done } }) {
  const dispatch = useDispatchContext();

  const todoDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };
  const todoToggle = (id) => {
    dispatch({ type: "TOGGLE", id });
    console.log("toggle");
  };

  return (
    <ItemContainer id={id}>
      <div>
        <CheckBtn done={done} toggle={() => todoToggle(id)}></CheckBtn>
        <Text done={done}>{text}</Text>
      </div>
      <Remover onClick={() => todoDelete(id)}>
        <FaTrashAlt />
      </Remover>
    </ItemContainer>
  );
}

export default TodoItem;
