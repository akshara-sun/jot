import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NoDataCTA from "../components/NoDataCTA.js";
import NavBar from "../components/NavBar";
import Sticky from "../components/Sticky";
import NotepadIcon from "@mui/icons-material/SubjectSharp";
import BlankScrollIcon from "@mui/icons-material/HistoryEduSharp";

const StickiesCanvas = () => {
  const [stickies, setStickies] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // show stickies after page loads
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
        <NavBar>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "black",
              textDecoration: "none",
              px: 2,
            }}
            variant='overline'
            component={Link}
            to='/notepad'
          >
            <NotepadIcon fontSize='small' sx={{ mr: 1 }} />
            Notepad
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "black",
              textDecoration: "none",
              px: 2,
            }}
            variant='overline'
            component={Link}
            to='/blank-canvas'
          >
            <BlankScrollIcon fontSize='small' sx={{ mr: 1 }} />
            Blank Canvas
          </Typography>
        </NavBar>
      </Grid>
      <Grid item xs={12} justifyContent='center'>
        {stickies.length === 0 ? (
          <NoDataCTA label='Add sticky' onClick={handleAddSticky} />
        ) : (
          <Button variant='contained' onClick={handleAddSticky}>
            Add sticky
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
                onDelete={handleDeleteSticky}
                onDrag={handleDrag}
                onSave={() =>
                  handleSaveSticky(
                    sticky.id,
                    sticky.text,
                    sticky.title
                  )
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
