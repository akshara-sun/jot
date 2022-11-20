import React, { useEffect, useState } from "react";
import { Grid, List, TextField, IconButton } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SortAndFilter from "../../../../../components/SortAndFilter";
import SortIcon from "@mui/icons-material/Sort";
import Task from "./Task";

const TaskList = () => {
  const [newTask, setNewTask] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const sortState = localStorage.getItem("sortState");
    if (sortState) {
      setSortBy(sortState);
    }
  }, []);

  // save tasks on page reload
  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setListOfTasks(JSON.parse(tasks));
    }
  }, []);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    if (!newTask) return;
    if (e.key === "Enter") {
      const newTaskObj = {
        id: new Date().getTime(),
        data: newTask,
        completed: false,
      };
      setListOfTasks([newTaskObj, ...listOfTasks]);
      localStorage.setItem(
        "tasks",
        JSON.stringify([newTaskObj, ...listOfTasks])
      );
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
      localStorage.setItem("tasks", JSON.stringify(updatedTask));
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTask = listOfTasks.filter((task) => task.id !== id);
    setListOfTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  };

  const handleCompleteTask = (id) => {
    const updatedTask = listOfTasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setListOfTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
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
            label={`Sort: ${sortBy}`}
            icon={<SortIcon />}
            options={[
              {
                value: "oldToNew",
                label: "Oldest to newest",
                onClick: () => {
                  setSortBy("Oldest to newest");
                  const sortedTasks = listOfTasks.sort((a, b) => a.id - b.id);
                  setListOfTasks(sortedTasks);
                  localStorage.setItem("sortState", "Oldest to newest");
                },
              },
              {
                value: "newToOld",
                label: "Newest to oldest",
                onClick: () => {
                  setSortBy("Newest to oldest");
                  const sortedTasks = listOfTasks.sort((a, b) => b.id - a.id);
                  setListOfTasks(sortedTasks);
                  localStorage.setItem("sortState", "Newest to oldest");
                },
              },
              {
                value: "alphabetically",
                label: "Alphabetically",
                onClick: () => {
                  setSortBy("Alphabetically");
                  const sortedTasks = listOfTasks.sort((a, b) => {
                    if (a.data < b.data) {
                      return -1;
                    }
                    if (a.data > b.data) {
                      return 1;
                    }
                    return 0;
                  });
                  setListOfTasks(sortedTasks);
                  localStorage.setItem("sortState", "Alphabetically");
                },
              },
            ]}
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
