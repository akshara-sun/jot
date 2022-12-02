import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Breadcrumbs,
  Link as LinkTo,
} from "@mui/material";
import MoodTracker from "./MoodTracker";
import { Link } from "react-router-dom";

const Journal = () => {
  const [mood, setMood] = useState(0);
  const [journalEntry, setJournalEntry] = useState("");
  const [savedJournalEntries, setSavedJournalEntries] = useState([]);
  const today = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const handleChange = (e) => {
    setJournalEntry(e.target.value);
  };

  const handleSaveJournalEntry = () => {
    const newEntry = {
      id: Math.floor(Math.random() * 100000000),
      date: today,
      time: time,
      text: journalEntry,
      mood: mood,
    };
    if (savedJournalEntries.length > 0) {
      setSavedJournalEntries([...savedJournalEntries, newEntry]);
    } else {
      setSavedJournalEntries([newEntry]);
    }
    localStorage.setItem("journalEntries", JSON.stringify(savedJournalEntries));
    setJournalEntry("");
  };

  const handleClearJournalEntry = () => {
    setJournalEntry("");
    setMood(0);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
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
          <Typography variant="caption">New entry</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid container item sx={{ pt: 2 }}>
        <Grid item xs={12}>
          <Typography variant="overline">Date: {today}</Typography>
        </Grid>
        <Grid item xs={10}>
          <MoodTracker selected={mood} onSelectMood={(id) => setMood(id)} />
        </Grid>
        {journalEntry !== "" && (
          <Grid container item sx={{ justifyContent: "flex-end" }}>
            <Button
              variant="text"
              color="error"
              onClick={handleClearJournalEntry}>
              Clear
            </Button>
            <Button variant="text" onClick={handleSaveJournalEntry}>
              Save
            </Button>
          </Grid>
        )}
        <Grid item xs={12}>
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
            value={journalEntry}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Journal;
