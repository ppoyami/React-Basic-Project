import axios from 'axios';

// example testing url: https://sandbox.iexapis.com/stable/stock/IBM/quote?token=YOUR_TEST_TOKEN_HERE
// base url: https://sandbox.iexapis.com

// my sandbox token: Tpk_47085b147c3547b28dd93fccdb291554
// MEMO: api.js 파일 구성하기
const api = axios.create({
  baseURL: 'https://sandbox.iexapis.com/stable',
  params: {
    token: 'Tpk_47085b147c3547b28dd93fccdb291554',
  },
});

// 심볼로 검색하기
export const searchSymbols = async symbol => {
  const response = await api.get(`/search/${symbol}`);
  return response.data;
};

export const getBalanceSheet = symbol => async queryString => {
  const response = await api.get(
    `/stock/${symbol}/balance-sheet${queryString}`
  );
  return response.data;
};

export default api;
