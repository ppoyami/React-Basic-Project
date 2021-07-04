import qs from 'qs';
import styled from 'styled-components';

import { useEffect } from 'react';

import { getSheet } from '../modules/sheet';
import { useDispatch, useSelector } from 'react-redux';
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

// MEMO: url params, url query 받아오기
function Table({
  match: {
    params: { symbol },
  },
  location,
}) {
  // // MEMO: qs 라이브러리 사용하기
  // const query = qs.parse(location.search, {
  //   ignoreQueryPrefix: true,
  // });

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.sheet);

  useEffect(() => {
    dispatch(getSheet(symbol, location.search));
  }, []);

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
      longTermDebt: [],
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
