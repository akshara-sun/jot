import React, { useEffect, useState } from "react";
import { Tabs, Tab, Select, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState("");
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const tab = window.location.pathname.split("/")[2];
    setCurrentTab(tab);
  }, []);

  const options = [
    {
      label: "Tasks",
      value: "tasks",
      route: "tasks",
    },
    {
      label: "Journal",
      value: "journal",
      route: "journal",
    },
  ];

  return (
    <>
      {mobileView ? (
        <Select
          variant="standard"
          size="small"
          fullWidth
          value={currentTab || "tasks"}
          sx={{
            pt: 1,
            color: "black",
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          }}
          onChange={(e) => setCurrentTab(e.target.value)}>
          {options.map((option) => (
            <MenuItem
              component={NavLink}
              to={option.route}
              key={option.value}
              value={option.value}
              sx={{
                textTransform: "uppercase",
                fontSize: "0.8rem",
              }}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Tabs
          orientation="vertical"
          value={currentTab || "tasks"}
          onChange={(e, newValue) => setCurrentTab(newValue)}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#FFEBBB",
            },
          }}>
          {options.map((option) => (
            <Tab
              key={option.value}
              value={option.value}
              label={option.label}
              component={NavLink}
              to={option.route}
              sx={{
                px: 2,
                color: "black",
                "&.Mui-selected": {
                  backgroundColor: "#FFEBBB",
                },
              }}
            />
          ))}
        </Tabs>
      )}
    </>
  );
};

export default Sidebar;
