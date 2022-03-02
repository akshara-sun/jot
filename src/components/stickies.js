import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

export default function Sticky(props) {
  const [text, handleTextChange] = useState("");
  const [currentPositions, updatePosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const nodeRef = useRef(null);

  const savePosition = (data) => {
    updatePosition({ x: data.x, y: data.y });
  };

  const handleChange = (e) => {
    handleTextChange(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  useEffect(() => {
    const initialPositions = JSON.parse(localStorage.getItem("positions"));
    updatePosition(initialPositions);
    setLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem(`positions`, JSON.stringify(currentPositions));
  }, [currentPositions]);

  return loaded ? (
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
  ) : null;
}
