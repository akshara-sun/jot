import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Breadcrumbs,
  Link as LinkTo,
} from "@mui/material";
import PropTypes from "prop-types";
import MoodTracker from "./MoodTracker";
import { Link } from "react-router-dom";

const Journal = ({ onSave }) => {
  const [mood, setMood] = useState(0);
  const [journalEntry, setJournalEntry] = useState("");
  const today = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const handleChange = (e) => {
    setJournalEntry(e.target.value);
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
              onClick={() => {
                setJournalEntry("");
                setMood(0);
              }}>
              Clear
            </Button>
            <Button
              variant="text"
              onClick={() => onSave(today, time, journalEntry, mood)}>
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

Journal.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default Journal;
