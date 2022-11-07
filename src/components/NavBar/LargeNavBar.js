import React from "react";
import PropTypes from "prop-types";
import { Grid, Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";
import JotIcon from "../../assets/images/jot-icon-orange.png";

const LargeNavBar = ({ tabs, selectedTab, onChange }) => {
  return (
    <Grid container columns={{ xs: 12, sm: 24 }}>
      <Grid item xs={1} component={Link} to="/">
        <Box
          component="img"
          src={JotIcon}
          sx={{
            pt: 2,
            px: 2,
            height: 40,
            width: 40,
          }}
        />
      </Grid>
      <Grid item xs={11}>
        <Tabs
          value={selectedTab.value}
          onChange={onChange}
          sx={{
            "& .MuiTabs-indicator": {
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#FFA500",
              mb: 1,
              mx: 2,
            },
            pl: 2,
          }}>
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              icon={tab.icon}
              iconPosition="start"
              label={tab.label}
              component={Link}
              to={tab.path}
              sx={{
                px: 2,
                color: "black",
                "&.Mui-selected": {
                  color: "black",
                },
              }}
            />
          ))}
        </Tabs>
      </Grid>
    </Grid>
  );
};

LargeNavBar.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

LargeNavBar.defaultProps = {
  selectedTab: null,
};

export default LargeNavBar;
