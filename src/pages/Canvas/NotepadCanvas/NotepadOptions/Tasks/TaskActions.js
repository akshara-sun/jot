import React from "react";
import { ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CompleteTask from "@mui/icons-material/TaskAlt";
import UndoIcon from "@mui/icons-material/Undo";

const TaskActions = ({ onComplete, onDelete, disabled, completed }) => {
  return (
    <ButtonGroup sx={{ display: "flex", justifyContent: "space-between" }}>
      <IconButton
        color={completed ? "info" : "success"}
        onClick={onComplete}
        disabled={disabled}>
        {completed ? <UndoIcon /> : <CompleteTask />}
      </IconButton>
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default TaskActions;
