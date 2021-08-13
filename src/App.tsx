import React from "react";
import "./App.css";
import SignIn from "./signin/containers";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./common/theme";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SignIn />
        </ThemeProvider>
    </div>
  );
}

export default App;
