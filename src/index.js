import React from "react";
import ReactDOM from "react-dom/client";
import ResetStyles from "./styles/reset.styles";
import GlobalStyles from "./styles/global.styles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResetStyles />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
