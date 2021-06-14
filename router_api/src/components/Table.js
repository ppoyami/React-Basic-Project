import qs from "qs";
import styled from "styled-components";
import useAsync from "../hook/useAsync";
import { getBalanceSheet } from "../api";
import { useEffect } from "react";
const StyledTable = styled.table`
  width: 450px;
  height: 250px;
  border: 1px solid white;
`;
const StyledTbody = styled.tbody`
  & > *:first-child > * {
    border-bottom: 1px solid white;
    font-size: 1.2rem;
  }
  & > *:first-child > *:first-child {
    border-right: 1px solid white;
  }
  & > *:not(:first-child) > *:first-child {
    border-right: 1px solid white;
    font-size: 1.1rem;
  }
`;
const Styledrow = styled.tr`
  text-align: center;
`;
const Styledcol = styled.td`
  padding: 0.5rem;
`;

function Table({
  match: {
    params: { symbol }
  },
  location
}) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const { period, last } = query;
  // 벨런시 시트 데이터 받아오기
  const isAnnual = period === "annual";
  const isQuarer = period === "quarter";

  const [state, fetchData] = useAsync();
  const { loading, data, error } = state;

  // ! Too many re-renders.
  useEffect(() => {
    fetchData(() => getBalanceSheet(symbol)(location.search));
  }, [location.search]);
  // balancesheet
  // ! Too many re-renders.
  // fetchData(() => getBalanceSheet(symbol)(location.search));

  if (!data) return null;
  if (!data.balancesheet) return null;
  if (loading) return <span>loading...</span>;
  if (error) return <span>Error!</span>;
  //currentCash
  //currentAssets
  //longTermDebt = 96489029705
  //reportDate = "2020-07-19"
  // [{reportDate, currentCash, currentAssets, longTermDebt}, {}]
  const dataObj = data.balancesheet.reduce(
    (acc, { reportDate, currentCash, currentAssets, longTermDebt }) => {
      acc.reportDate.push(reportDate);
      acc.currentCash.push(currentCash);
      acc.currentAssets.push(currentAssets);
      acc.longTermDebt.push(longTermDebt);
      return acc;
    },
    {
      reportDate: [],
      currentCash: [],
      currentAssets: [],
      longTermDebt: []
    }
  );

  return (
    <>
      <StyledTable>
        <StyledTbody>
          <Styledrow>
            <Styledcol>Category</Styledcol>
            {dataObj.reportDate.map((v, i) => (
              <Styledcol key={i}>{v}</Styledcol>
            ))}
          </Styledrow>
          <Styledrow>
            <Styledcol>current Cash</Styledcol>
            {dataObj.currentCash.map((v, i) => (
              <Styledcol key={i}>{v}</Styledcol>
            ))}
          </Styledrow>
          <Styledrow>
            <Styledcol>current Assets</Styledcol>
            {dataObj.currentAssets.map((v, i) => (
              <Styledcol key={i}>{v}</Styledcol>
            ))}
          </Styledrow>
          <Styledrow>
            <Styledcol>longTerm Debt</Styledcol>
            {dataObj.longTermDebt.map((v, i) => (
              <Styledcol key={i}>{v}</Styledcol>
            ))}
          </Styledrow>
        </StyledTbody>
      </StyledTable>
    </>
  );
}

export default Table;
