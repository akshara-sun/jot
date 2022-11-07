import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const options = [
    {
      label: "Tasks",
      value: "tasks",
      description: "Forgetting something?",
      route: "tasks",
    },
    {
      label: "Journal",
      value: "journal",
      description: "What's on your mind?",
      route: "journal",
    },
  ];

  return (
    <List disablePadding>
      {options.map((option) => (
        <Box key={option.value}>
          <NavLink
            to={option.route}
            style={({ isActive }) =>
              isActive ? { backgroundColor: "orange" } : undefined
            }>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={option.label}
                  secondary={option.description}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <Divider />
        </Box>
      ))}
    </List>
  );
};

export default Sidebar;
