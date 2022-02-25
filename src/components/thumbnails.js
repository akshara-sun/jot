import React from "react";
import { Link } from "react-router-dom";

export default function Thumbnails() {
  return (
    <div className="thumbnail-container">
      <ul className="sticky-tnail">
        <li>
          <p>
            <Link to="/sticky-canvas">Stickies</Link>
          </p>
        </li>
      </ul>
      <ul className="notepad-tnail">
        <li>
          <p>
            <Link to="/notepad">Notepad</Link>
          </p>
        </li>
      </ul>
      <ul className="blank-canvas-tnail">
        <li>
          <p>
            <Link to="/canvas">Blank Canvas</Link>
          </p>
        </li>
      </ul>
    </div>
  );
}
