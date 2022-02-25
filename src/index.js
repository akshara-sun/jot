import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import StickyCanvas from "./sticky-canvas";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sticky-canvas" element={<StickyCanvas />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
