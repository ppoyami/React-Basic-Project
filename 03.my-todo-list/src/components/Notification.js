import styled, { css } from "styled-components";

const Circle = styled.span`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary_dark};

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-weight: 600;
  font-size: 1.5rem;

  position: absolute;
  top: -0.8rem;
  left: 4rem;
  z-index: 20;
  transition: opacity 0.5s;

  ${({ expendible }) =>
    expendible &&
    css`
      opacity: 0;
    `}
`;

function Notification({ children, expendible }) {
  return <Circle expendible={expendible}>{children}</Circle>;
}

export default Notification;
