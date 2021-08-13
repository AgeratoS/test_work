import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./common/theme";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
    </ThemeProvider>
  );
}

export default App;
