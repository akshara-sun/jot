import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import CanvasHeader from "./CanvasHeader";
import NotepadPage from "../../components/NotepadPage.js";

const NotepadCanvas = () => {
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
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "orange",
            "&:hover": { backgroundColor: "black" },
          }}
          onClick={handleAddPage}>
          Add page
        </Button>
      </Grid>
      <Grid item sx={{ flexGrow: 1, overflow: "auto" }}>
        <Grid container item sx={{ mx: 40 }}>
          {pages.map((page) => (
            <Grid item xs={7} key={page.id}>
              <NotepadPage
                onDelete={() => handleDeletePage(page.id)}
                onSave={() => handleSavePage(page.id, page.text, page.title)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotepadCanvas;
