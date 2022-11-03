import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Grid, Paper, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const NotepadPage = ({ onDelete, onSave }) => {
  return (
    <Box
      component={Paper}
      sx={{
        height: "82vh",
        width: "100%",
      }}>
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sx={{ pb: 4 }}>
          <IconButton color="error" sx={{ float: "right" }} onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
          <Button color="success" onClick={onSave}>
            Save
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Title"
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
            rows={17}
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
