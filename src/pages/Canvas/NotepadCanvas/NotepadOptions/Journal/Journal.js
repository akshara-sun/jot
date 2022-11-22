import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import JournalPage from "./JournalPage";
import MoodTracker from "./MoodTracker";

const Journal = () => {
  const today = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const handleSaveEntryAndMetadata = () => {};

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="overline">Date: {today}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="overline">Time: {time}</Typography>
      </Grid>
      <Grid item xs={10}>
        <MoodTracker />
      </Grid>
      <Grid item xs={2}>
        <Grid item container sx={{ justifyContent: "flex-end" }}>
          <Button variant="text" color="error">
            Clear
          </Button>
          <Button variant="text">Save</Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <JournalPage />
      </Grid>
    </Grid>
  );
};

export default Journal;
