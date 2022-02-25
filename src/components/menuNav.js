import React from "react";
import { Link } from "react-router-dom";

export default function MenuNav() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
    >
      <Link to="/">Home</Link> | <Link to="/notepad">Notedpad</Link> |{" "}
      <Link to="/canvas">Blank Canvas</Link>
    </nav>
  );
}
