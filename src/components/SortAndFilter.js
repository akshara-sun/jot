import React, { useState } from "react";
import { Chip, ListItemText, Menu, MenuItem } from "@mui/material";

const SortAndFilter = ({ label, icon, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Chip
        clickable={true}
        label={label}
        icon={icon}
        variant="outlined"
        onClick={(e) => setAnchorEl(e.target)}
        sx={{ flexDirection: "row-reverse", pr: 2 }}
      />
      <Menu
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ disablePadding: true }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            onClick={option.onClick}>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SortAndFilter;
