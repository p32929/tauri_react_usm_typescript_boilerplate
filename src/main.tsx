import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { ThemeProvider } from '@material-ui/core/styles';
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./utils/AppStates";
import { theme } from "./utils/Theme";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
