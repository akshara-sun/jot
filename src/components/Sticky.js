import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import { TextField, IconButton, Paper, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Sticky = ({ visibility, onClose }) => {
  const nodeRef = React.useRef(null);
  const [text, setText] = useState("");
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  console.log(currentPosition);

  const handleDrag = (event, data) => {
    setCurrentPosition({ x: data.x, y: data.y });
  };

  const handleStop = () => {
    localStorage.setItem("stickyPosition", JSON.stringify(currentPosition));
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{ x: 0, y: 0 }}
      position={currentPosition}
      onDrag={handleDrag}
      onStop={handleStop}
      scale={1}
    >
      <Paper
        elevation={5}
        sx={{
          visibility: visibility,
          textAlign: "center",
          backgroundColor: "#EBD4A2",
          height: 200,
          width: 200,
        }}
      >
        <IconButton sx={{ float: "right" }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <TextField
          variant="standard"
          sx={{ mb: 1 }}
          multiline
          minRows={5}
          maxRows={15}
          value={text}
          placeholder="Enter text here"
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="text" sx={{ float: 'right', p: 0, color: 'black' }}>
          Save
        </Button>
      </Paper>
    </Draggable>
  );
};

Sticky.propTypes = {
  visibility: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Sticky;
