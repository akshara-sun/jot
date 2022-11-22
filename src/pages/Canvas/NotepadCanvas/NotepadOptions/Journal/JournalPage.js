import React, { useState } from "react";
import { TextField } from "@mui/material";

const JournalPage = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      multiline
      placeholder="What's on your mind?"
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "orange",
          },
        },
      }}
      rows={30}
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default JournalPage;
