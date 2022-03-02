import React, { useState, useRef } from "react";
import Button from "./components/button";
import MenuNav from "./components/menuNav";
import Sticky from "./components/stickies";
import Draggable from "react-draggable";

export default function StickyCanvas() {
  const [components, setComponents] = useState([<Sticky />]);
  const [currentPosition, updatePosition] = useState({ x: 0, y: 0 });

  const nodeRef = useRef(null);

  const addNewNote = (e) => {
    setComponents([...components, <Sticky />]);
    updatePosition({ x: 0, y: 0 });
    localStorage.setItem("newSticky", <Sticky />);
  };

  const trackPosition = (data) => {
    updatePosition({ x: data.x, y: data.y });
  };

  const savePositions = (data) => {
    localStorage.setItem("stickyXPos", data.x);
    localStorage.setItem("stickyYPos", data.y);
  };

  const clearStickies = () => {
    if (
      window.confirm(
        "Are you sure you want to clear this canvas? This action cannot be undone."
      )
    ) {
      setComponents([]);
      localStorage.clear();
    }
  };

  return (
    <div className="StickyCanvas">
      <MenuNav />
      <h2>Stickies Canvas</h2>
      <Button onClick={() => addNewNote()} text="New Note" />{" "}
      <Button onClick={() => clearStickies()} text="Clear Canvas" />
      {components.map((item, idx) => {
        return (
          <Draggable
            key={idx}
            defaultPosition={currentPosition}
            nodeRef={nodeRef}
            onDrag={(e, data) => trackPosition(data)}
            onStop={(data) => savePositions(data)}
          >
            <div ref={nodeRef}>
              <Sticky />
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
