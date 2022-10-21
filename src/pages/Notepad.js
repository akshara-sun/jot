import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import StickyNoteIcon from "@mui/icons-material/StickyNote2";
import BlankScrollIcon from "@mui/icons-material/HistoryEduSharp";
import NoDataCTA from "../components/NoDataCTA";
import NotepadPage from "../components/NotepadPage";

const Notepad = () => {
  const [pages, setPages] = useState([]);

  const handleAddPage = () => {
    const newPage = {
      id: new Date().getTime(),
      text: "",
      title: "Untitled Page",
    };
    setPages([...pages, newPage]);
  };

  const handleDeletePage = (id) => {
    setPages(pages.filter((page) => page.id !== id));
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
            to='/stickies'
          >
            <StickyNoteIcon fontSize='small' sx={{ mr: 1 }} />
            Stickies
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
        {pages.length > 0 ? (
          <>
            <Grid item container justifyContent='center' alignItems='center'>
              <Grid item>
                <Button
                  variant='contained'
                  onClick={handleAddPage}
                  color='success'
                  sx={{
                    py: 2,
                    px: 4,
                  }}
                >
                  Add page
                </Button>
              </Grid>
            </Grid>
            <Grid item container sx={{ mx: 40 }}>
              {pages.map((page) => (
                <Grid item xs={7} key={page.id}>
                  <NotepadPage
                   onDelete={() => handleDeletePage(page.id)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <NoDataCTA label='Add page' onClick={handleAddPage} />
        )}
      </Grid>
    </Grid>
  );
};

export default Notepad;
