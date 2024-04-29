import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "materialize-css";
import * as serviceWorker from "./serviceWorker";
import { InputForm } from "./App2";

const rootElement = document.getElementById("root");

ReactDOM.unstable_createRoot(rootElement).render(
  <>
    <InputForm />
    <App />
  </>,
);

serviceWorker.unregister();
