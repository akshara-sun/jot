import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CanvasHeader from "../CanvasHeader";
import NoDataCTA from "../../../components/NoDataCTA";
import Sidebar from "./Sidebar";
import Reminders from "./Reminders";

const NOTE_TYPES = [
  {
    label: "Tasks & reminders",
    description: "Forgetting something?",
  },
  { label: "Journal", description: "What's on your mind?" },
  { label: "Misc", description: "For everything else" },
];

const NotepadCanvas = () => {
  const [pages, setPages] = useState([]);

  // const handleAddPage = () => {
  //   const newPage = {
  //     id: new Date().getTime(),
  //     text: "",
  //     title: "Untitled Page",
  //   };
  //   setPages([...pages, newPage]);
  // };

  return (
    <Grid container>
      <Grid item xs={12}>
        <CanvasHeader />
      </Grid>
      <Grid item xs={2} sx={{ border: 1, borderColor: "gray" }}>
        <Sidebar options={NOTE_TYPES} onClick={console.log("cool")} />
      </Grid>
      <Grid item xs={10}>
        <Box sx={{ border: 1, p: 2 }} height="75vh">
          {/* show Reminders component if first option from Sidebar is clicked */}
          <Reminders />
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotepadCanvas;
