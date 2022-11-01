import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import NoDataCTA from '../../components/NoDataCTA';
import Sticky from "../../components/Sticky";
import CanvasHeader from "./CanvasHeader.js";

const StickiesCanvas = () => {
  const [stickies, setStickies] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visibility, setVisibility] = useState("visible");

  useEffect(() => {
    const sticky = localStorage.getItem("stickies");
    if (sticky) {
      setStickies(JSON.parse(sticky));
    }
  }, []);

  const handleDrag = (e, ui) => {
    const { x, y } = position;
    setPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  const handleAddSticky = () => {
    const newSticky = {
      id: new Date().getTime(),
      title: "",
      text: "",
    };
    setStickies([...stickies, newSticky]);
  };

  const handleDeleteSticky = (id) => {
    setStickies(stickies.filter((sticky) => sticky.id !== id));
    localStorage.setItem("stickies", JSON.stringify(stickies));
  };

  const handleSaveSticky = (id, text, title) => {
    const index = stickies.findIndex((sticky) => sticky.id === id);
    stickies.splice(index, 1, { id, text, title });
    localStorage.setItem("stickies", JSON.stringify(stickies));
  };

  const handleTitleChange = (e, id) => {
    const newTitle = e.target.value;
    setStickies(
      stickies.map((sticky) =>
        sticky.id === id ? { ...sticky, title: newTitle } : sticky
      )
    );
  };

  const handleBodyChange = (e, id) => {
    const newText = e.target.value;
    setStickies(
      stickies.map((sticky) =>
        sticky.id === id ? { ...sticky, text: newText } : sticky
      )
    );
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <CanvasHeader />
      </Grid>
      <Grid item xs={12} sx={{ justifyContent: 'center' }}>
        {stickies.length === 0 && visibility === "visible" ? (
          <NoDataCTA label='Add sticky' onClick={handleAddSticky} />
        ) : (
          <Button variant='contained' color="success" onClick={handleAddSticky}>
            Add sticky
          </Button>
        )}
        {visibility === "hidden" && (
          <Button variant='contained' color="success" onClick={() => setVisibility("visible")} sx={{ ml: 2 }}>
            Show stickies
          </Button>
        )}
      </Grid>
      <Grid item xs={12}>
        <Grid item container>
          {stickies.map((sticky) => (
            <Grid item xs={3} key={sticky.id}>
              <Sticky
                id={sticky.id}
                content={sticky}
                position={position}
                visibility={visibility}
                onClose={() => setVisibility("hidden")}
                onDelete={handleDeleteSticky}
                onDrag={handleDrag}
                onSave={() =>
                  handleSaveSticky(sticky.id, sticky.text, sticky.title)
                }
                onContentTitleChange={(e) => handleTitleChange(e, sticky.id)}
                onContentBodyChange={(e) => handleBodyChange(e, sticky.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StickiesCanvas;
