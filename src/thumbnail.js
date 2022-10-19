import React from "react";
import { Link } from 'react-router-dom';
import { Box, Paper, Typography } from "@mui/material";

const Thumbnail = ({ name, sticky  }) => {
  return (
    <Box
      component={Paper}
      sx={{
        textAlign: "center",
        py: 12,
        backgroundColor: sticky && "#EBD4A2",
        "&:hover": {
          cursor: "pointer",
          boxShadow: 10,
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          textTransforms: "uppercase",
          color: "black",
          textDecoration: "none",
          "&:active": { fontWeight: "none", color: "none" },
          "&:selected": { color: "none" },
        }}
        component={Link}
        to={`/${name
          .toLowerCase()
          .split(" ")
          .join("")}`}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Thumbnail;
