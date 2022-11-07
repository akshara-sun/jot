import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import MoodTracker from "../MoodTracker";

const Journal = () => {
  const [value, setValue] = useState("");
  const today = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="overline" sx={{ opacity: "40%" }}>
          Date: {today}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="overline" sx={{ opacity: "40%" }}>
          Time: {time}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MoodTracker />
      </Grid>
      <Grid item xs={12}>
        <TextField
          multiline
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "orange",
              },
            },
          }}
          rows={24}
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default Journal;
