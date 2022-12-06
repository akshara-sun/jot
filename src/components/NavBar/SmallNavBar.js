import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box, Divider, Grid, Select, MenuItem } from "@mui/material";
import JotIcon from "../../assets/images/jot-icon-orange.png";

const SmallNavBar = ({ tabs, selectedTab, onChange }) => {
  return (
    <Grid container sx={{ py: 1 }}>
      <Grid item xs={2} component={Link} to="/">
        <Box
          component="img"
          src={JotIcon}
          sx={{
            height: 45,
            width: 45,
          }}
        />
      </Grid>
      <Grid item xs={10}>
        <Select
          variant="standard"
          disableUnderline
          size="small"
          fullWidth
          value={selectedTab}
          onChange={onChange}
          sx={{
            pt: 1,
            color: "black",
            textTransform: "uppercase",
            fontSize: "1.5rem",
            fontWeight: "bold",
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
          }}>
          {tabs.map((tab) => (
            <MenuItem
              component={Link}
              to={tab.path}
              key={tab.value}
              value={tab.value}
              sx={{
                textTransform: "uppercase",
                fontSize: "0.8rem",
              }}>
              {tab.label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Divider />
    </Grid>
  );
};

SmallNavBar.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SmallNavBar;
