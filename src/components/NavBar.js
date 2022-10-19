import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/HomeSharp";
import NotepadIcon from "@mui/icons-material/SubjectSharp";
import BlankScrollIcon from "@mui/icons-material/HistoryEduSharp";
import { Link } from "react-router-dom";
import LineIcon from '@mui/icons-material/DriveFileRenameOutline';

const NavBar = () => {
  return (
    <Toolbar
      variant="dense"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          alignItems: 'center',
          pr: 2,
          color: "black",
          textDecoration: "none",
        }}
        component={Link}
        to="/"
      >
        Jot
        <LineIcon fontSize="small" />
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "black",
            textDecoration: "none",
            px: 2
          }}
          variant="overline"
          component={Link}
          to="/notepad"
        >
          <NotepadIcon fontSize="small" sx={{ mr: 1 }} />
          Notedpad
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "black",
            textDecoration: "none",
          }}
          variant="overline"
          component={Link}
          to="/blank-canvas"
        >
          <BlankScrollIcon fontSize="small" sx={{ mr: 1 }} />
          Blank Canvas
        </Typography>
      </Box>
    </Toolbar>
  );
};

export default NavBar;
