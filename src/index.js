import { StrictMode } from "react";
import ReactDOM from "react-dom";

import HomePage from "./HomePage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
  rootElement
);
