import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import "./style.css";

// LET'S CREATE A STORE PASS IN THE COMBINED
// REDUCERS AND PASS EVERYITING INTO THE PROVIDER
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
