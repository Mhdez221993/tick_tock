import "@draft-js-plugins/mention/lib/plugin.css";
import AppProviders from "components/AppProviders";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);