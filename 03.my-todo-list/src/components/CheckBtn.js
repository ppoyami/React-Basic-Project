import styled, { css } from "styled-components";

const Outer = styled.span`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 4rem;
  border: 3px solid white;
  border-radius: 50%;
  padding: 1rem;
`;

const Inner = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  background: white;
  border-radius: 50%;

  ${({ done }) =>
    done &&
    css`
      width: 2rem;
      height: 2rem;
    `}
`;

function CheckBtn({ done, toggle }) {
  return (
    <Outer onClick={toggle}>
      <Inner done={done} />
    </Outer>
  );
}

export default CheckBtn;
