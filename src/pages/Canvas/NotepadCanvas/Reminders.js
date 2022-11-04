import React, { useState } from "react";
import {
  Checkbox,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import Menu from "@mui/icons-material/MoreVertTwoTone";

const Reminders = () => {
  const [reminder, setReminder] = useState("");
  const [checked, isChecked] = useState(false);
  const [listOfReminders, setListOfReminders] = useState([]);

  const handleChange = (e) => {
    setReminder(e.target.value);
  };

  const handleAddReminder = (e) => {
    if (e.key === "Enter" && reminder !== "") {
      setListOfReminders([...listOfReminders, reminder]);
      setReminder("");
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
          }}
          value={reminder}
          onChange={handleChange}
          onKeyDown={handleAddReminder}
          placeholder="Enter a task/reminder..."
        />
      </Grid>
      <Grid item xs={12}>
        <List dense sx={{ maxHeight: "70vh", overflow: "auto" }}>
          {listOfReminders.map((reminder, index) => (
            <>
              <ListItem
                key={`reminder-${index}`}
                secondaryAction={
                  // show Edit Modal on click
                  <IconButton>
                    <Menu />
                  </IconButton>
                }>
                <ListItemIcon>
                  <Checkbox
                    color="success"
                    checked={checked}
                    onChange={() => isChecked(!checked)}
                  />
                </ListItemIcon>
                <ListItemText primary={reminder} />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Reminders;
