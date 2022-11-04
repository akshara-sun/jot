import React from "react";
import { Box } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import StickiesCanvas from "./Canvas/Pages/StickiesCanvas";
import NotepadCanvas from "./Canvas/Pages/NotepadCanvas";
import DrawingCanvas from "./Canvas/DrawingCanvas";

const AppRoutes = () => {
  return (
    <Box sx={{ height: "100%", pb: { xs: 8, md: 0 } }}>
      <Switch>
        <Route exact path="/stickies" component={StickiesCanvas} />
        <Route exact path="/notepad" component={NotepadCanvas} />
        <Route exact path="/draw" component={DrawingCanvas} />
      </Switch>
    </Box>
  );
};

export default AppRoutes;
