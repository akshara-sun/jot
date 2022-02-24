import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sticky from "./components/stickies";
import HomePage from "./home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stickies" element={<Sticky />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
