import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@mui/material";

const NoDataCTA = ({ label, onClick }) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Button
          onClick={onClick}
          variant="text"
          sx={{
            textAlign: "center",
            py: 2,
            px: 4,
            border: "1px dashed #000",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "black",
              textDecoration: "none",
            }}
          >
            {label}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

NoDataCTA.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NoDataCTA;
