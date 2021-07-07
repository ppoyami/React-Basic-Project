import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  
  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Cinzel', 'serif';
  }
  
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const colors = {
  color_primary: "#845ef7",
  color_primary__dark: "#6741d9",
  color_primary__light: "#b197fc"
};
