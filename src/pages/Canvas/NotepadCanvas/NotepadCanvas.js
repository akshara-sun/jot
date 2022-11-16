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
      <Grid
        item
        container
        sx={{
          height: { sm: "calc(100vh - 64px)" },
        }}>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            mx: { xs: 2, sm: 0 },
          }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ p: 2 }}>
            <Routes>
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotepadCanvas;
