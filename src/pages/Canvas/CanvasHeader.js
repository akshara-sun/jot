import React, { useEffect, useMemo, useState } from "react";
import CANVAS_DATA from "../../constants/CANVAS_DATA";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LargeNavBar from "../../components/NavBar/LargeNavBar";
import SmallNavBar from "../../components/NavBar/SmallNavBar";

const CanvasHeader = () => {
  const [currentTab, setCurrentTab] = useState(null);
  const [currentOption, setCurrentOption] = useState("");
  const location = useLocation();
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const currentTabFromLocation = useMemo(() => {
    return CANVAS_DATA.find((tab) => tab.path === location.pathname);
  }, [location.pathname]);

  if (!currentTab) {
    setCurrentTab(currentTabFromLocation);
  }

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleChange = (e) => {
    setCurrentOption(e.target.value);
  };

  useEffect(() => {
    setCurrentTab(currentTabFromLocation);
  }, [currentTabFromLocation]);

  return (
    <Grid container sx={{ mb: 2 }}>
      <Grid item xs={12}>
        {mobileView ? (
          <SmallNavBar
            tabs={CANVAS_DATA}
            selectedTab={currentOption}
            onChange={handleChange}
          />
        ) : (
          <LargeNavBar
            tabs={CANVAS_DATA}
            selectedTab={currentTab}
            onChange={handleTabChange}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default CanvasHeader;
