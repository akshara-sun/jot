import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const NoDataCTA = ({ children }) => {
  return (
    <Box
      sx={{
        border: "1px dashed",
        borderRadius: 1,
        p: 2,
        width: "400px",
      }}>
      {children}
    </Box>
  );
};

NoDataCTA.propTypes = {
  children: PropTypes.node,
};

NoDataCTA.defaultProps = {
  children: null,
};

export default NoDataCTA;
