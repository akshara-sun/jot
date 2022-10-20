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

  const handleAddSticky = () => {
    const newSticky = {
      id: new Date().getTime(),
      text: "",
      position: { x: 0, y: 0 },
    };
    setStickies([...stickies, newSticky]);
  };

  const handleDeleteSticky = (id) => {
    setStickies(stickies.filter((sticky) => sticky.id !== id));
  };

  const handleSaveSticky = (id, text) => {
    const stickyPosition = JSON.parse(localStorage.getItem("stickyPosition"));
    const sticky = {
      id,
      text,
      position: stickyPosition,
    };
    localStorage.setItem("stickies", JSON.stringify([...stickies, sticky]));
  };

  useEffect(() => {
    const stickyData = JSON.parse(localStorage.getItem("stickies"));
    if (stickyData) {
      setStickies(stickyData);
    }
  }, []);

  return (
    <Grid container direction='column' sx={{ height: "100vh" }}>
      <Grid item>
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
            Notedpad
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "black",
              textDecoration: "none",
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
      <Grid item sx={{ flexGrow: 1, overflow: "auto" }}>
        {stickies.length > 0 ? (
          <>
            <Grid item container justifyContent='center' alignItems='center'>
              <Grid item>
                <Button
                  variant='contained'
                  onClick={handleAddSticky}
                  color='success'
                  sx={{
                    py: 2,
                    px: 4,
                  }}
                >
                  Add Sticky
                </Button>
              </Grid>
            </Grid>
            <Grid item container sx={{ p: 2 }}>
              {stickies.map((sticky) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={sticky.id}>
                  <Sticky
                    visibility='visible'
                    onClose={() => handleDeleteSticky(sticky.id)}
                    onSave={() => handleSaveSticky(sticky.id, sticky.text)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <NoDataCTA label='Add Sticky' onClick={handleAddSticky} />
        )}
      </Grid>
    </Grid>
  );
};

export default StickiesCanvas;
