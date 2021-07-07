import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  
  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }
`;

export default GlobalStyled;
