import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Paper, IconButton, TextField } from "@mui/material";
import notepad from "../assets/images/notepad_no_margin.png";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const NotepadPage = ({
    onDelete,
    onSave,
}) => {
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
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sx={{ pb: 4, textAlign: "right" }}>
          <IconButton color='error' sx={{ float: "right" }} onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            color='success'
            sx={{ float: "right" }}
            onClick={onSave}
          >
            <SaveIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder='Title'
            sx={{
              ".MuiInputBase-input": {
                py: 0,
                fontSize: 32,
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={20}
            fullWidth
            sx={{
              textAlign: "flex-start",
              overflowY: "scroll",
              ".MuiInputBase-root": {
                py: 0,
                fontSize: 24,
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

NotepadPage.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default NotepadPage;
