import { createGlobalStyle } from "styled-components";

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
