import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";

const Sidebar = ({ options, onClick }) => {
  return (
    <List disablePadding>
      {options.map((option) => (
        <>
          <ListItem key={option.label} onClick={onClick} disableGutters>
            <ListItemButton>
              <ListItemText
                primary={option.label}
                secondary={option.description}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default Sidebar;
