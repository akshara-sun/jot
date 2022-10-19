import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { Box, Grid, IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Sticky = (props) => {
  const [text, handleTextChange] = useState("");
  const [isVisible, setVisibility] = useState("flex");
  const nodeRef = React.useRef(null);

  const toggleVisibility = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this note? This action cannot be undone."
      )
    ) {
      setVisibility("hidden");
      localStorage.removeItem("inputValue");
    }
  };

  const handleChange = (e) => {
    handleTextChange(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  useEffect(() => {
    handleTextChange(localStorage.getItem("inputValue"));
  }, []);

  return (
    <Draggable nodeRef={nodeRef}>
      <Box ref={nodeRef} sx={{ display: isVisible, height: '199px', width: '199px', border: 1, borderRadius: 1 }}>
        <Grid container>          
          <Grid item xs={12}>
            <IconButton variant="outlined" onClick={toggleVisibility} color="error">
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <TextField
            multiline
            maxRows={6}
            minRows={2}
            value={text}
            onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>

    </Draggable>
  );
}

export default Sticky;
