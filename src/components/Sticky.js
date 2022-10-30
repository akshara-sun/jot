import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import { Button, Grid, IconButton, Paper, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Sticky = ({
  id,
  content,
  onDelete,
  onSave,
  onContentTitleChange,
  onContentBodyChange,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef(null);

  const handleDrag = (e, ui) => {
    const { x, y } = position;
    setPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  return (
    <Draggable
      id={id}
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
      scale={1}
    >
      <Paper
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          zIndex: 1,
          overflow: "hidden",
          boxShadow: 3,
          '&:hover': {
            cursor: 'grab'
          },
          backgroundColor: '#EBD482',
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Button
              color="success"
              onClick={onSave}
            >
              Save
              </Button>
            <IconButton color="info" sx={{ float: "right" }} onClick={() => onDelete(id)}>
              <CloseIcon fontSize="small" />
            </IconButton>
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
              value={content.title}
              onChange={onContentTitleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              rows={10}
              fullWidth
              sx={{
                textAlign: "flex-start",
                overflowY: "scroll",
                ".MuiInputBase-root": {
                  py: 0,
                  fontSize: 24,
                },
              }}
              value={content.text}
              onChange={onContentBodyChange}
            />
          </Grid>
        </Grid>
      </Paper>
    </Draggable>
  );
};

Sticky.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onContentTitleChange: PropTypes.func.isRequired,
  onContentBodyChange: PropTypes.func.isRequired,
};

export default Sticky;