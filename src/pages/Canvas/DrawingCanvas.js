import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CanvasHeader from "./CanvasHeader";

const DrawingCanvas = () => {
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
        <CanvasHeader />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        {canvasIsEmpty ? (
          <Typography variant="overline">Click and drag to draw</Typography>
        ) : (
          <Box>
            <Button
              color="error"
              variant="text"
              onClick={() => {
                contextRef.current.clearRect(
                  0,
                  0,
                  canvasRef.current.width,
                  canvasRef.current.height
                );
                setCanvasIsEmpty(true);
              }}>
              Clear
            </Button>
            <Button color="success" variant="text" onClick={handleSaveDrawing}>
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

export default DrawingCanvas;
