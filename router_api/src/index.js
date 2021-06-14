import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import App from "./App";
import { colors } from "./GlobalStyled";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={colors}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
