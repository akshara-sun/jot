import React, { useEffect, useState } from "react";
import { Button, Grid, List, ListItem, TextField, Input } from "@mui/material";
import TaskActions from "./TaskActions";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [markAsDone, setMarkAsDone] = useState(false);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setListOfTasks(JSON.parse(tasks));
    }
  }, []);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddAndSaveTask = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setListOfTasks([...listOfTasks, task]);
      console.log([...listOfTasks, task]);
      localStorage.setItem("tasks", JSON.stringify([...listOfTasks, task]));
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...listOfTasks];
    updatedTasks.splice(index, 1);
    setListOfTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleUpdateTask = (e, index) => {
    setIsEditing(true);
    const updatedTasks = [...listOfTasks];
    if (e.target.value !== "") {
      updatedTasks[index] = e.target.value;
      setListOfTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTask("");
    } else {
      handleDeleteTask(index);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} display="flex" justifyContent="center">
        <TextField
          sx={{
            width: { sm: 200, md: 300 },
            "& .MuiInputBase-root": {
              height: 40,
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "orange",
              },
            },
          }}
          value={task}
          onChange={handleChange}
          placeholder="Enter a reminder/task..."
          onKeyDown={handleAddAndSaveTask}
        />
        <Button onClick={handleAddAndSaveTask}>Add</Button>
      </Grid>
      <Grid item xs={12}>
        <List dense sx={{ maxHeight: "70vh", overflow: "auto" }}>
          {listOfTasks.map((task, index) => (
            <div key={`task-${index}`}>
              <ListItem
                component={Input}
                value={task}
                onChange={(e) => handleUpdateTask(e, index)}
                onFocus={() => setIsEditing(true)}
                onBlur={() => setIsEditing(false)}
                sx={{
                  "& .MuiInputBase-input": {
                    textDecoration: markAsDone ? "line-through" : "none",
                  },
                }}
                endAdornment={
                  <TaskActions
                    disabled={isEditing}
                    completed={markAsDone}
                    onComplete={() => setMarkAsDone(!markAsDone)}
                    onDelete={() => handleDeleteTask(index)}
                  />
                }
              />
            </div>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Tasks;
