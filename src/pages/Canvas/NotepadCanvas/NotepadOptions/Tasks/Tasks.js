import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  TextField,
  Input,
  IconButton,
} from "@mui/material";
import TaskActions from "./TaskActions";
import AddTaskIcon from "@mui/icons-material/AddTask";

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
    if (task === "") {
      alert("Cannot add empty task");
      return;
    }
    if (e.key === "Enter" || e.type === "click") {
      setListOfTasks([...listOfTasks, task]);
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

  const handleIncreasePriority = (index) => {
    if (index > 0) {
      const updatedTasks = [...listOfTasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setListOfTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  const handleDecreasePriority = (index) => {
    if (index < listOfTasks.length - 1) {
      const updatedTasks = [...listOfTasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setListOfTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={handleAddAndSaveTask}
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
      <Grid item xs={12}>
        {/* insert sorting and filtering component here */}
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
                    list={listOfTasks}
                    index={index}
                    disabled={isEditing}
                    completed={markAsDone}
                    onIncreasePriority={() => handleIncreasePriority(index)}
                    onDecreasePriority={() => handleDecreasePriority(index)}
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
