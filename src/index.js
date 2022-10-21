import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StickyCanvas from "./pages/StickiesCanvas";
import Notepad from "./pages/Notepad";
import BlankCanvas from './pages/BlankCanvas';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stickies" element={<StickyCanvas />} />
      <Route path="/notepad" element={<Notepad />} />
      <Route path="/blank-canvas" element={<BlankCanvas />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
