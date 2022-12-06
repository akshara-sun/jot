import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StickiesCanvas from "./pages/Canvas/StickiesCanvas";
import NotepadCanvas from "./pages/Canvas/NotepadCanvas/NotepadCanvas";
import DrawingCanvas from "./pages/Canvas/DrawingCanvas";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stickies" element={<StickiesCanvas />} />
      <Route path="/notepad/*" element={<NotepadCanvas />} />
      <Route path="/draw" element={<DrawingCanvas />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
