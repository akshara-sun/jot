import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

export default function Sticky() {
  const [text, handleTextChange] = useState("");
  const nodeRef = React.useRef(null);

  const handleChange = (e) => {
    handleTextChange(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  useEffect(() => {
    handleTextChange(localStorage.getItem("inputValue"));
  }, []);

  return (
    <>
      <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <ul className="sticky">
            <li>
              <div className="button-container">
                <button id="close-button">x</button>
              </div>
              <p>
                <input
                  id="sticky-text"
                  placeholder="Enter text here..."
                  cols="25"
                  rows="10"
                  value={text}
                  style={{ fontFamily: "Gloria Hallelujah, cursive" }}
                  onChange={handleChange}
                />
              </p>
            </li>
          </ul>
        </div>
      </Draggable>
    </>
  );
}
