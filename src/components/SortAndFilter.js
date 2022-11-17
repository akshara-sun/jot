import React, { useState } from "react";
import { Chip, ListItemText, Menu, MenuItem } from "@mui/material";

const SortAndFilter = ({ label, icon, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Chip
        label={label}
        icon={icon}
        variant="outlined"
        onClick={(e) => setAnchorEl(e.target)}
      />
      <Menu
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ disablePadding: true }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transition>
        {options.map((option) => (
          <MenuItem key={option.value} selected={option.value}>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SortAndFilter;
