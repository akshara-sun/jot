import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState("");

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
    <Tabs
      orientation="vertical"
      value={currentTab || "tasks"}
      onChange={(e, newValue) => setCurrentTab(newValue)}
      sx={{
        color: "black",
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
            color: "black",
            textTransform: "none",
            "&.Mui-selected": {
              backgroundColor: "#FFEBBB",
              color: "black",
            },
            "&:hover": {
              backgroundColor: "#3E3838",
              color: "white",
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default Sidebar;
