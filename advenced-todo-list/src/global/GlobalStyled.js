import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`

  html {
    font-size: 62.5%;
  }  
  body {
    box-sizing: border-box;
    background-color: #cddae6;
    color: #273049;
  }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyled;
