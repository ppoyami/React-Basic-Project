import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: 2px;
  color: tomato;
  margin: 10rem auto;
`;

function PageNotFound() {
  return <Title>Page Not Found</Title>;
}

export default PageNotFound;
