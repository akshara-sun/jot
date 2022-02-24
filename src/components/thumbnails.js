import React from "react";

export default function Thumbnails() {
  return (
    <div className="thumbnail-container">
      <ul className="sticky-tnail">
        <li>
          <p>Post-Its</p>
        </li>
      </ul>
      <ul className="notepad-tnail">
        <li>
          <p>Notepad</p>
        </li>
      </ul>
      <ul className="blank-canvas-tnail">
        <li>
          <p>Blank Canvas</p>
        </li>
      </ul>
    </div>
  );
}
