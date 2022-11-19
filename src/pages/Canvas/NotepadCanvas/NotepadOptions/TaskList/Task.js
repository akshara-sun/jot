import React, { useState } from "react";
import { ListItem, Input } from "@mui/material";
import TaskActions from "./TaskActions";

const Task = ({
  index,
  list,
  task,
  completed,
  onComplete,
  onEdit,
  onIncreasePriority,
  onDecreasePriority,
  onDelete,
}) => {
  return (
    <ListItem
      component={Input}
      value={task}
      onChange={onEdit}
      sx={{
        "& .MuiInputBase-input": {
          textDecoration: completed ? "line-through" : "none",
        },
      }}
      endAdornment={
        <TaskActions
          list={list}
          index={index}
          completed={completed}
          onComplete={onComplete}
          onIncreasePriority={onIncreasePriority}
          onDecreasePriority={onDecreasePriority}
          onDelete={onDelete}
        />
      }
    />
  );
};

export default Task;
