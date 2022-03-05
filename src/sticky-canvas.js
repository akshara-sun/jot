import React, { useState, useRef } from "react";
import Button from "./components/button";
import MenuNav from "./components/menuNav";
import Sticky from "./components/stickies";
import Draggable from "react-draggable";

export default function StickyCanvas() {
  const [components, setComponents] = useState([]);
  const [isVisible, setVisibility] = useState("flex");
  const [stickyPosition, setStickyPosition] = useState({ x: 0, y: 0 });
  //const [positionsArray, trackPositions] = useState([]);

  const nodeRef = useRef(null);

  const isDragging = (data) => {
    setStickyPosition({ x: data.x, y: data.y });
  };

  const savePosition = () => {
    localStorage.setItem("stoppedAt", JSON.stringify(stickyPosition));
    //logic to add:
    //get last saved position from local storage and save it in positionsArr.
    //if the same sticky is moved again, the value from the previous state will be overwritten
    //if a new sticky is added and moved, the positionsArray will be updated
  };

  const addNewNote = (e) => {
    //updating components array with a new sticky every time button is clicked
    setComponents([...components, <Sticky />]);
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

  // useEffect(() => {
  //   localStorage.setItem("positions_stickies", JSON.stringify(positions), [
  //     positions
  //   ]);
  // });

  return (
    <div className="StickyCanvas">
      <MenuNav />
      <h2>Stickies Canvas</h2>
      <Button onClick={() => addNewNote()} text="New Note" />{" "}
      <Button onClick={() => clearStickies()} text="Clear Canvas" />
      {components.map((item, idx) => {
        return (
          <Draggable
            id="stickies"
            defaultPosition={stickyPosition}
            nodeRef={nodeRef}
            onDrag={(data) => isDragging(data)}
            onStop={(e, data) => savePosition(data)}
            key={idx}
          >
            <div
              ref={nodeRef}
              style={{
                display: isVisible,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-end"
              }}
            >
              <Sticky
                style={{
                  backgroundColor: "#F1F172",
                  fontFamily: "Gloria Hallelujah, cursive"
                }}
                onClick={() => toggleVisibility()}
              />
            </div>
          </Draggable>
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
// localStorage.setItem(
//   `stickyPosition`,
//   JSON.stringify({ x: data.x, y: data.y })
// );
