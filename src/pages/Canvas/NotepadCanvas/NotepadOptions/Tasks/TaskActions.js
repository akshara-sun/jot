import React from "react";
import { ButtonGroup, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CompleteTask from "@mui/icons-material/TaskAlt";
import UndoIcon from "@mui/icons-material/Undo";
import DecreasePriority from "@mui/icons-material/KeyboardDoubleArrowDown";
import IncreasePriority from "@mui/icons-material/KeyboardDoubleArrowUp";

const TaskActions = ({
  list,
  disabled,
  completed,
  index,
  onComplete,
  onDelete,
  onIncreasePriority,
  onDecreasePriority,
}) => {
  return (
    <>
      <ButtonGroup sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color={completed ? "info" : "success"}
          onClick={onComplete}
          disabled={disabled}>
          {completed ? <UndoIcon /> : <CompleteTask />}
        </IconButton>
        <IconButton color="error" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          disabled={index === list.length - 1}
          onClick={onDecreasePriority}>
          <DecreasePriority />
        </IconButton>
        <IconButton disabled={index === 0} onClick={onIncreasePriority}>
          <IncreasePriority />
        </IconButton>
      </ButtonGroup>
    </>
  );
};

export default TaskActions;
