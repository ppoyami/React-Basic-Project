import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;
  outline: none;
  border: none;
  cursor: pointer;

  background: #38d9a9;
  color: white;
  padding: 2rem 4rem;
  border-radius: 10rem;

  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
