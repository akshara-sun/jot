import React, { useState, useEffect } from "react";

export default function PostIts() {
  const [text, handleTextChange] = useState("");

  const handleChange = (e) => {
    handleTextChange(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  useEffect(() => {
    handleTextChange(localStorage.getItem("inputValue"));
  }, []);

  return (
    <ul className="post-its">
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
  );
}
