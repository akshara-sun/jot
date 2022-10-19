import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const Thumbnail = ({ name, color, image  }) => {
  return (
    <Box
      component={Paper}
      sx={{
        textAlign: "center",
        py: 12,
        backgroundColor: color,
        backgroundImage: image,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
          cursor: "pointer",
          boxShadow: 10,
        },
      }}
    >
      <Typography
        variant="overline"
        sx={{
          color: "black",
          textDecoration: "none",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

Thumbnail.defaultProps = {
    color: "white",
    image: "none",
}
export default Thumbnail;
