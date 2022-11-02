import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import Sticky from "../../components/Sticky";
import CanvasHeader from "./CanvasHeader.js";

const StickiesCanvas = () => {
  const [stickies, setStickies] = useState([]);

  useEffect(() => {
    const sticky = localStorage.getItem("stickies");
    if (!sticky) {
      return;
    } else if (sticky.length > 0) {
      setStickies(JSON.parse(sticky));
    }
  }, []);

  const handleAddSticky = () => {
    const newSticky = {
      id: new Date().getTime(),
      title: "",
      text: "",
    };
    setStickies([...stickies, newSticky]);
  };

  const handleDeleteSticky = (id) => {
    const editedSticky = stickies.find((sticky) => sticky.id === id);
    const newStickies = stickies.filter((sticky) => sticky.id !== id);
    if (editedSticky.text === "" && editedSticky.title === "") {
      setStickies(newStickies);
      localStorage.setItem("stickies", JSON.stringify(newStickies));
    } else {
      alert(
        "Are you sure you want to delete this sticky? This action cannot be undone."
      );
      setStickies(newStickies);
      localStorage.setItem("stickies", JSON.stringify(newStickies));
    }
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
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "orange",
            "&:hover": { backgroundColor: "black" },
          }}
          onClick={handleAddSticky}>
          Add sticky
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid item container>
          {stickies.map((sticky) => (
            <Grid item xs={3} key={sticky.id}>
              <Sticky
                id={sticky.id}
                content={sticky}
                onDelete={handleDeleteSticky}
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
