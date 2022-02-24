import React from "react";
import Sticky from "./components/stickies";

export default function StickiesCanvas() {
  return (
    <>
      <div>
        <h1>Sticky Canvas</h1>
        <h3>Seriously, you can place your note anywhere and it'll stick ;)</h3>
        <button style={{ fontFamily: "Gloria Hallelujah, cursive" }}>
          New Note
        </button>
        <Sticky />
      </div>
    </>
  );
}
