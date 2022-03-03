import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

export default function Sticky(props) {
  const [text, handleTextChange] = useState("");
  const [currentPositions, updatePosition] = useState({ x: 0, y: 0 });

  const nodeRef = useRef(null);

  const savePosition = (data) => {
    updatePosition({ x: data.x, y: data.y });
    localStorage.setItem(
      "stickyPosition",
      JSON.stringify({ x: data.x, y: data.y })
    );
  };

  const handleChange = (e) => {
    handleTextChange(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  return (
    <Draggable
      id="stickies"
      defaultPosition={currentPositions}
      nodeRef={nodeRef}
      onStop={(e, data) => savePosition(data)}
    >
      <div ref={nodeRef}>
        <ul className="sticky">
          <li style={props.style}>
            <div className="button-container">
              <button onClick={props.onClick} id="close-button">
                x
              </button>
            </div>
            <label className="sticky-note">
              <textarea
                id="sticky-text"
                placeholder="Enter text here..."
                defaultValue={text}
                style={props.style}
                onChange={handleChange}
              ></textarea>
            </label>
          </li>
        </ul>
      </div>
    </Draggable>
  );
}
