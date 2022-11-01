import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box, Grid, Select, MenuItem } from "@mui/material";
import JotIcon from "../../assets/images/jot-icon.png";

const SmallNavBar = ({ tabs, selectedTab, onChange }) => {
  return (
    <Grid container>
      <Grid item xs={2} component={Link} to='/'>
        <Box
          component='img'
          src={JotIcon}
          sx={{
            height: 45,
            width: 45,
          }}
        />
      </Grid>
      <Grid item xs={10}>
        <Select
          size='small'
          fullWidth
          value={"" || selectedTab.value}
          label='Age'
          onChange={onChange}
          sx={{
            "& .MuiSelect-select": {
              color: "black",
            },
          }}>
          {tabs.map((tab) => (
            <MenuItem
              component={Link}
              to={tab.path}
              key={tab.value}
              value={"" || tab.value}>
              {tab.label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};

SmallNavBar.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SmallNavBar;
