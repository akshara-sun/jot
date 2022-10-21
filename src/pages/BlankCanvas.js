import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import NotepadIcon from "@mui/icons-material/SubjectSharp";
import StickyNoteIcon from "@mui/icons-material/StickyNote2";

const BlankCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasIsEmpty, setCanvasIsEmpty] = useState(true);

  const handleStartDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    setCanvasIsEmpty(false);
  };

  const handleStopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const handleDrawing = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const handleSaveDrawing = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL();
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = dataURL;
    link.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    // To support computers with higher screen density, double the pixel density.
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.styleWidth = 5;
    contextRef.current = context;
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "black",
              textDecoration: "none",
              px: 2,
            }}
            variant='overline'
            component={Link}
            to='/stickies'
          >
            <StickyNoteIcon fontSize='small' sx={{ mr: 1 }} />
            Stickies
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "black",
              textDecoration: "none",
              px: 2,
            }}
            variant='overline'
            component={Link}
            to='/notepad'
          >
            <NotepadIcon fontSize='small' sx={{ mr: 1 }} />
            Notedpad
          </Typography>
        </NavBar>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        {canvasIsEmpty ? (
          <Typography variant='overline'>Click and drag to draw</Typography>
        ) : (
          <Box>
            <Button
              color='error'
              variant='text'
              onClick={() => {
                contextRef.current.clearRect(
                  0,
                  0,
                  canvasRef.current.width,
                  canvasRef.current.height
                );
                setCanvasIsEmpty(true);
              }}
            >
              Clear
            </Button>
            <Button color='success' variant='text' onClick={handleSaveDrawing}>
              Save
            </Button>
          </Box>
        )}
      </Grid>
      <Grid item xs={12}>
        <canvas
          ref={canvasRef}
          onMouseDown={handleStartDrawing}
          onMouseUp={handleStopDrawing}
          onMouseMove={handleDrawing}
        />
      </Grid>
    </Grid>
  );
};

export default BlankCanvas;
