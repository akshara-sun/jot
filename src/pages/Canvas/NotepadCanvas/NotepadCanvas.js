import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CanvasHeader from "../CanvasHeader";
import NotepadPage from "../../../components/NotepadPage.js";
import NoDataCTA from "../../../components/NoDataCTA";

const NotepadCanvas = () => {
  const [pages, setPages] = useState([]);
  const [open, isOpen] = useState(false);

  const toggleDrawer = (e) => {
    isOpen(!open);
  };

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

  const handleSavePage = (id, text, title) => {
    const page = {
      id,
      text,
      title,
    };
    localStorage.setItem("pages", JSON.stringify([...pages, page]));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <CanvasHeader />
      </Grid>
      {pages.length === 0 ? (
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}>
          <NoDataCTA>
            <Typography variant="h5" sx={{ mb: 2 }}>
              You don't have any notes yet.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "orange",
                "&:hover": { backgroundColor: "black" },
              }}
              onClick={handleAddPage}>
              New note
            </Button>
          </NoDataCTA>
        </Grid>
      ) : (
        <>
          <Grid item xs={3} sx={{ border: 1 }}>
            <Box />
          </Grid>
          <Grid item xs={9}>
            {pages.map((page) => (
              <NotepadPage
                onDelete={() => handleDeletePage(page.id)}
                onSave={() => handleSavePage(page.id, page.text, page.title)}
              />
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default NotepadCanvas;
