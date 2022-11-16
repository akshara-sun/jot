import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import UpdateMenu from "./UpdateMenu";

const Tasks = () => {
  const [reminder, setReminder] = useState("");
  const [listOfReminders, setListOfReminders] = useState([]);

  useEffect(() => {
    const reminders = localStorage.getItem("reminders");
    if (reminders) {
      setListOfReminders(JSON.parse(reminders));
    }
  }, []);

  const handleChange = (e) => {
    setReminder(e.target.value);
  };

  const handleAddAndSaveReminder = () => {
    setListOfReminders([...listOfReminders, reminder]);
    console.log([...listOfReminders, reminder]);
    localStorage.setItem(
      "reminders",
      JSON.stringify([...listOfReminders, reminder])
    );
    setReminder("");
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
          value={reminder}
          onChange={handleChange}
          placeholder="Enter a task/reminder..."
        />
        <Button onClick={handleAddAndSaveReminder}>Add</Button>
      </Grid>
      <Grid item xs={12}>
        <List dense sx={{ maxHeight: "70vh", overflow: "auto" }}>
          {listOfReminders.map((reminder, index) => (
            <div key={`reminder-${index}`}>
              <ListItem
                secondaryAction={
                  <UpdateMenu
                    menuOptions={[
                      { label: "Edit", onClick: () => console.log("edit") },
                      { label: "Delete", onClick: () => console.log("delete") },
                      {
                        label: "Mark as done",
                        onClick: () => console.log("marked as done"),
                      },
                    ]}
                  />
                }>
                <ListItemText primary={reminder} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Tasks;
