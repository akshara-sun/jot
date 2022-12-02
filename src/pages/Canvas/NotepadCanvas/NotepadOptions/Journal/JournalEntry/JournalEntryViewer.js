import React, { useState } from "react";
import {
  Breadcrumbs,
  Grid,
  Typography,
  Button,
  Link as LinkTo,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const JournalEntryViewer = ({ entry, journals }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(entry.text);

  const handleClickToEdit = (e) => {
    setIsEditing(true);
    setText(e.target.value);
  };

  const handleSave = (id) => {
    const newJournals = journals.map((journal) => {
      if (journal.id === id) {
        journal.text = text;
      }
      return journal;
    });
    console.log(newJournals);
    localStorage.setItem("journalEntries", JSON.stringify(newJournals));
    setIsEditing(false);
  };

  const title = entry.date + " " + entry.time;

  return (
    <Grid container>
      <Grid item xs={10}>
        <Breadcrumbs>
          <LinkTo
            variant="caption"
            underline="hover"
            component={Link}
            to="/notepad/journal"
            sx={{
              color: "orange",
            }}>
            All entries
          </LinkTo>
          <Typography variant="caption">{`${entry.date} - ${entry.time}`}</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={2}>
        {isEditing && (
          <Grid container item sx={{ justifyContent: "flex-end" }}>
            <Button variant="text" color="error" onClick={() => setText("")}>
              Clear
            </Button>
            <Button variant="text" onClick={() => handleSave(entry.id)}>
              Save
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "none",
              "&.Mui-focused": {
                backgroundColor: "#FFEBBB",
              },
            },
          }}
          disableUnderline={true}
          fullWidth
          multiline
          value={text}
          onChange={handleClickToEdit}
        />
      </Grid>
    </Grid>
  );
};

export default JournalEntryViewer;
