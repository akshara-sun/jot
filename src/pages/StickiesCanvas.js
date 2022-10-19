import React, { useState } from "react";
import AddButton from "../components/addNewButton";
import NavBar from "../components/NavBar";
import Sticky from "../components/Sticky";

export default function StickyCanvas() {
  const [components, setComponents] = useState([]);

  const addNewNote = () => {
    setComponents([...components, "Clear Canvas"]);
  };

  return (
    <>
      <NavBar />
      <AddButton onClick={() => addNewNote()} />
      {components.map((item, i) => (
        <Sticky
          style={{
            display: "flex",
            flexDirection: "row"
          }}
          key={i}
        />
      ))}
    </>
  );
}
