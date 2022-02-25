import React, { useState } from "react";
import AddButton from "./components/addNewButton";
import Sticky from "./components/stickies";

export default function StickyCanvas() {
  const [components, setComponents] = useState([]);
  const [bgColor, setBgColor] = useState("#F1F172");

  const addNewNote = () => {
    setComponents([...components, "Clear Canvas"]);
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setBgColor("#" + randomColor);
  };
  return (
    <div className="StickyCanvas">
      <h2>Stickies Canvas</h2>
      <h3>Stick to it.</h3>
      <AddButton onClick={addNewNote} />
      {components.map((item, i) => (
        <Sticky
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: bgColor
          }}
          key={i}
        />
      ))}
    </div>
  );
}
