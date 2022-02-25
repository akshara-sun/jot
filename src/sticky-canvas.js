import React, { useState, useRef } from "react";
import AddButton from "./components/addNewButton";
import MenuNav from "./components/menuNav";
import Sticky from "./components/stickies";
import Draggable from "react-draggable";

export default function StickyCanvas() {
  const [components, setComponents] = useState([]);

  const nodeRef = useRef(null);

  const addNewNote = () => {
    setComponents([...components, "Clear Canvas"]);
  };

  return (
    <div className="StickyCanvas">
      <MenuNav />
      <h2>Stickies Canvas</h2>
      <AddButton onClick={() => addNewNote()} />
      {components.map((item, i) => {
        return (
          <Draggable key={item} nodeRef={nodeRef}>
            <div ref={nodeRef}>
              <Sticky key={i} />
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}

/*
Function that generates random backgroud color
const [bgColor, setBgColor] = useState(["#F1F172"]);

  const generateRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setBgColor([...bgColor, color]);
    console.log(bgColor);
  };


*/
