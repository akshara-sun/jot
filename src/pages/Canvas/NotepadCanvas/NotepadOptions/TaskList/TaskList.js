import React, { useState } from "react";
import { Grid, List, TextField, IconButton } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SortAndFilter from "../../../../../components/SortAndFilter";
import SortIcon from "@mui/icons-material/Sort";
import Task from "./Task";

const TaskList = () => {
  const [newTask, setNewTask] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    if (!newTask) return;
    if (e.key === "Enter") {
      setListOfTasks([
        {
          id: new Date().getTime(),
          data: newTask,
          completed: false,
        },
        ...listOfTasks,
      ]);
      setNewTask("");
    }
  };

  const handleEditTask = (e, id) => {
    if (e.target.value !== "") {
      const updatedTask = listOfTasks.map((task) => {
        if (task.id === id) {
          task.data = e.target.value;
        }
        return task;
      });
      setListOfTasks(updatedTask);
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTask = listOfTasks.filter((task) => task.id !== id);
    setListOfTasks(updatedTask);
  };

  const handleCompleteTask = (id) => {
    const updatedTask = listOfTasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setListOfTasks(updatedTask);
  };

  return (
    <Grid container>
      <Grid item xs={12} display="flex" justifyContent="center">
        <TextField
          sx={{
            width: 300,
            "& .MuiInputBase-root": {
              height: 40,
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "orange",
              },
            },
          }}
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a reminder/task..."
          onKeyDown={handleAddTask}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={handleAddTask}
                sx={{
                  "&:hover": {
                    color: "orange",
                  },
                }}>
                <AddTaskIcon />
              </IconButton>
            ),
          }}
        />
      </Grid>
      {listOfTasks.length > 0 && (
        <Grid item xs={12}>
          <SortAndFilter
            label="Sort by: "
            icon={<SortIcon />}
            //TODO: Add sort functionality
            //options={}
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <List dense sx={{ maxHeight: "70vh", overflow: "auto" }}>
          {listOfTasks.map((task, index) => (
            <div key={task.id}>
              <Task
                index={index}
                list={listOfTasks}
                task={task.data}
                completed={task.completed}
                onComplete={() => handleCompleteTask(task.id)}
                onEdit={(e) => handleEditTask(e, task.id)}
                onDelete={() => handleDeleteTask(task.id)}
              />
            </div>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default TaskList;
