import React from "react";

export default function Thumbnails() {
  return (
    <div className="thumbnail-container">
      <ul className="post-its">
        <li>
          <p>Post-Its</p>
        </li>
      </ul>
      <ul className="notepad">
        <li>
          <p>Notepad</p>
        </li>
      </ul>
      <ul className="blank-canvas">
        <li>
          <p>Blank Canvas</p>
        </li>
      </ul>
    </div>
  );
}
