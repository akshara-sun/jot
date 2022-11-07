import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
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
      <Grid
        component={Paper}
        item
        container
        sx={{
          height: "calc(100vh - 64px)",
        }}>
        <Grid item xs={2} sx={{ backgroundColor: "#FEC252" }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ p: 2 }}>
            <Routes>
              <Route path="/journal" element={<Journal />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotepadCanvas;
