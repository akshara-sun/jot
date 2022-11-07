import React from "react";
import { Box, Grid } from "@mui/material";
import CanvasHeader from "../CanvasHeader";
import Sidebar from "./Sidebar";
import Journal from "./NotepadOptions/Journal/Journal";
import Tasks from "./NotepadOptions/Tasks/Tasks";
import { Routes, Route } from "react-router-dom";

const NotepadCanvas = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <CanvasHeader />
      </Grid>
      <Grid item xs={2} sx={{ border: 1, borderColor: "gray" }}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Box sx={{ border: 1, p: 2 }} height="75vh">
          <Routes>
            <Route path="/journal" element={<Journal />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotepadCanvas;
