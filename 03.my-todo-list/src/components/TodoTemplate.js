import styled from "styled-components";

const Template = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

function TodoTemplate({ children }) {
  return <Template>{children}</Template>;
}

export default TodoTemplate;
