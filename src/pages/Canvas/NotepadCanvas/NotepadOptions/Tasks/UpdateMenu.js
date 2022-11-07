import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Menu, MenuItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/MoreVertTwoTone";

const UpdateMenu = ({ menuOptions }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleMenuClick}>
        <MenuIcon />
      </IconButton>
      <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleMenuClose}>
        {menuOptions.map((option) => (
          <MenuItem key={option.label}>
            <ListItemText>{option.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

UpdateMenu.propTypes = {
  menuOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default UpdateMenu;
