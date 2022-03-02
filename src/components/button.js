import React from "react";

export default function Button(props) {
  return (
    <button
      style={{ fontFamily: "Gloria Hallelujah, cursive" }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
