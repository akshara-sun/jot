import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StickyCanvas from "./pages/StickiesCanvas";
import Notepad from "./pages/Notepad";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stickies" element={<StickyCanvas />} />
      <Route path="/notepad" element={<Notepad />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
