import { createGlobalStyle } from 'styled-components';

// MEMO: createGlobalStyle 사용하기
const GlobalStyled = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyled;
