import React, { useRef } from "react";
import Draggable from "react-draggable";
import { Grid, TextField, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const Sticky = ({
  id,
  content,
  position,
  visibility,
  onClose,
  onDelete,
  onDrag,
  onSave,
  onContentTitleChange,
  onContentBodyChange,
}) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{ x: 0, y: 0 }}
      position={position}
      onDrag={onDrag}
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
          visibility: visibility
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <IconButton
              color="error"
              onClick={() => onDelete(id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="success"
              onClick={onSave}
            >
              <SaveIcon fontSize="small" />
            </IconButton>
            <IconButton color="info" sx={{ float: "right" }} onClick={onClose}>
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

export default Sticky;