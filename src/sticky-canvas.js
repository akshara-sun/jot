import React, { useState, useEffect } from "react";
import Button from "./components/button";
import MenuNav from "./components/menuNav";
import Sticky from "./components/stickies";

export default function StickyCanvas() {
  const [components, setComponents] = useState([]);
  const [isVisible, setVisibility] = useState("flex");
  const [positions, trackPositions] = useState([{ x: 0, y: 0 }]);

  const addNewNote = (e) => {
    //updating components array with a new sticky every time button is clicked
    setComponents([...components, <Sticky />]);
    //getting position of sticky on the page
    let stickyPositionData = JSON.parse(localStorage.getItem("stickyPosition"));
    //updating positions array with new sticky position
    //problem - updating before drag - if the sticky is added, dragged, and then page refreshed, the positions array will not contain the dragged position of the sticky. It will only have the position it had once it was added to the canvas.
    trackPositions([...positions, stickyPositionData]);
    //console.log(positions);
    localStorage.setItem("newSticky", <Sticky />);
  };

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

  const clearStickies = () => {
    if (
      window.confirm(
        "Are you sure you want to clear this canvas? This action cannot be undone."
      )
    ) {
      setComponents([]);
      localStorage.clear();
    }
  };

  useEffect(() => {
    localStorage.setItem("positions_stickies", JSON.stringify(positions), [
      positions
    ]);
  });

  return (
    <div className="StickyCanvas">
      <MenuNav />
      <h2>Stickies Canvas</h2>
      <Button onClick={() => addNewNote()} text="New Note" />{" "}
      <Button onClick={() => clearStickies()} text="Clear Canvas" />
      {components.map((item, idx) => {
        return (
          <div
            style={{
              display: isVisible,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end"
            }}
            key={idx}
          >
            <Sticky
              style={{
                backgroundColor: "#F1F172",
                fontFamily: "Gloria Hallelujah, cursive"
              }}
              onClick={() => toggleVisibility()}
            />
          </div>
        );
      })}
    </div>
  );
}

/*
Function that generates random backgroud color
const [bgColor, setBgColor] = useState(["#F1F172"]);

  const generateRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setBgColor([...bgColor, color]);
    console.log(bgColor);
  };


*/
