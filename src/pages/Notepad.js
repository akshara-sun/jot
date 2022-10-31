import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
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
        <NavBar />
      </Grid>
      <Grid item sx={{ flexGrow: 1, overflow: "auto" }}>
        {pages.length > 0 ? (
          <>
            <Grid item container justifyContent='center' alignItems='center'>
              <Grid item>
                <Button
                  variant='contained'
                  onClick={handleAddPage}
                  color='info'
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
                    onSave={() =>
                      handleSavePage(page.id, page.text, page.title)
                    }
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
