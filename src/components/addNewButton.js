import React from "react";

export default function AddButton(props) {
  return (
    <button
      style={{ fontFamily: "Gloria Hallelujah, cursive" }}
      onClick={props.onClick}
    >
      New Note
    </button>
  );
}
