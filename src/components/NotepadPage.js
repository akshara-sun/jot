import React from "react";
import { Box, Paper, IconButton } from "@mui/material";
import notepad from "../assets/images/notepad.png";
import DeleteIcon from "@mui/icons-material/Delete";

const NotepadPage = ({ onDelete }) => {
  return (
    <Box
      component={Paper}
      sx={{
        height: "90vh",
        width: "100%",
        backgroundImage: `url(${notepad})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <IconButton color='error' sx={{ float: "right" }} onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default NotepadPage;
