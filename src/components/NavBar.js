import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import JotIcon from "../assets/images/jot-icon.png";
import StickyNoteIcon from "@mui/icons-material/StickyNote2";
import NotepadIcon from "@mui/icons-material/SubjectSharp";
import BlankScrollIcon from "@mui/icons-material/HistoryEduSharp";

const NavBar = ({ children }) => {
  return (
    <Toolbar
      variant="dense"
      sx={{
        display: "flex",
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
        <Box component="img" src={JotIcon} height="40px" />
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "black",
              textDecoration: "none",
              px: 2,
            }}
            variant='overline'
            component={Link}
            to='/stickies'
          >
            <StickyNoteIcon fontSize='small' sx={{ mr: 1 }} />
            Stickies
        </Typography>
        <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "black",
              textDecoration: "none",
              px: 2,
            }}
            variant='overline'
            component={Link}
            to='/notepad'>
            <NotepadIcon fontSize='small' sx={{ mr: 1 }} />
            Notepad
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "black",
              textDecoration: "none",
            }}
            variant='overline'
            component={Link}
            to='/blank-canvas'
          >
            <BlankScrollIcon fontSize='small' sx={{ mr: 1 }} />
            Drawing Canvas
          </Typography>
      </Box>
    </Toolbar>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
};

NavBar.defaultProps = {
  children: null,
};

export default NavBar;
