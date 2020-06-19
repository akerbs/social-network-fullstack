import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
