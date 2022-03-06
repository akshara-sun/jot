import React, { useState, useRef } from "react";

export default function Sticky(props) {
  const [text, handleTextChange] = useState("");

  const handleChange = (e) => {
    handleTextChange(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  return (
    <div>
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
  );
}
