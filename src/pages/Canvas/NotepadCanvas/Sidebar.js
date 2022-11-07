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
      route: "tasks",
    },
    {
      label: "Journal",
      route: "journal",
    },
  ];

  return (
    <List disablePadding>
      {options.map((option) => (
        <Box key={option.label}>
          <ListItem
            disablePadding
            component={NavLink}
            to={option.route}
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "black",
                    color: "white",
                    textDecoration: "bold",
                  }
                : {
                    color: "black",
                    textDecoration: "none",
                  }
            }>
            <ListItemButton
              sx={{
                "&:hover": { color: "white", backgroundColor: "#F78A00" },
              }}>
              <ListItemText primary={option.label} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
};

export default Sidebar;
