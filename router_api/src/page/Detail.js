import styled from "styled-components";
import Table from "../components/Table";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import TabButton from "../components/TabButton";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: 2px;
`;

const ButtonGroup = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const Icon = styled.i`
  font-size: 2.5rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color_primary__light};
  }
`;

function Detail({
  match: {
    params: { symbol }
  },
  history: { push }
}) {
  return (
    <>
      <Icon onClick={() => push("/")}>
        <BsHouseFill />
      </Icon>
      <Title>{symbol}</Title>
      <ButtonGroup>
        <TabButton
          baseUrl={`/detail${symbol}/balance-sheet`}
          query="period=annual&last=4"
        >
          annual
        </TabButton>
        <TabButton
          baseUrl={`/detail${symbol}/balance-sheet`}
          query="period=quarter&last=4"
        >
          quarter
        </TabButton>
      </ButtonGroup>
      <Route path="/detail:symbol/balance-sheet" component={Table} />
    </>
  );
}

export default Detail;
