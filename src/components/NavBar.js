import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LineIcon from '@mui/icons-material/DriveFileRenameOutline';

const NavBar = ({ children }) => {
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
        <LineIcon fontSize="small" sx={{ ml: 1 }} />
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {children}
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
