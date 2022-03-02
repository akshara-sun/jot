import React, { useState, useEffect } from "react";

export default function Sticky() {
  const [text, handleTextChange] = useState("");
  const [isVisible, setVisibility] = useState("flex");

  const toggleVisibility = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this note? This action cannot be undone."
      )
    ) {
      setVisibility("none");
      localStorage.removeItem("inputValue");
    }
  };

  const handleChange = (e) => {
    handleTextChange(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  useEffect(() => {
    handleTextChange(localStorage.getItem("inputValue"));
  }, []);

  return (
    <div>
      <ul style={{ display: isVisible }} className="sticky">
        <li>
          <div className="button-container">
            <button onClick={() => toggleVisibility()} id="close-button">
              x
            </button>
          </div>
          <label className="sticky-note">
            <textarea
              id="sticky-text"
              placeholder="Enter text here..."
              defaultValue={text}
              style={{ fontFamily: "Gloria Hallelujah, cursive" }}
              onChange={handleChange}
            ></textarea>
          </label>
        </li>
      </ul>
    </div>
  );
}
