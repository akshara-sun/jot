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
      <ButtonGroup>
        <IconButton color={completed ? "info" : "success"} onClick={onComplete}>
          {" "}
          {completed ? <UndoIcon /> : <CompleteTask />}
        </IconButton>
        <IconButton color="error" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          sx={{
            display: "none",
            "&:hover": {
              display: 0 <= index < list.length - 1 && "block",
            },
          }}
          onClick={onDecreasePriority}>
          <DecreasePriority />
        </IconButton>
        <IconButton
          sx={{
            display: "none",
            "&:hover": {
              display: 0 < index <= list.length - 1 && "block",
            },
          }}
          onClick={onIncreasePriority}>
          <IncreasePriority />
        </IconButton>
      </ButtonGroup>
    </>
  );
};

export default TaskActions;
