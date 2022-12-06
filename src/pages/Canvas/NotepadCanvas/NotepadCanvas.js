import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import CanvasHeader from "../CanvasHeader";
import Sidebar from "./Sidebar";
import Journal from "./NotepadOptions/Journal/Journal";
import JournalEntry from "./NotepadOptions/Journal/JournalEntry/JournalEntry";
import JournalEntryViewer from "./NotepadOptions/Journal/JournalEntry/JournalEntryViewer";
import Tasks from "./NotepadOptions/TaskList/TaskList";
import { Routes, Route, useLocation } from "react-router-dom";

const NotepadCanvas = () => {
  const [savedJournalEntries, setSavedJournalEntries] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/notepad") {
      window.location.href = "/notepad/tasks";
    }
  }, []);

  const handleSaveJournalEntry = (date, time, text, mood) => {
    const newJournalEntry = {
      id: Math.floor(Math.random() * 100000000),
      date: date,
      time: time,
      text: text,
      mood: mood,
    };
    setSavedJournalEntries([...savedJournalEntries, newJournalEntry]);
    localStorage.setItem(
      "journalEntries",
      JSON.stringify([...savedJournalEntries, newJournalEntry])
    );
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <CanvasHeader />
      </Grid>
      <Grid
        item
        container
        sx={{
          height: { sm: "calc(100vh - 64px)" },
        }}>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            mx: { xs: 2, sm: 0 },
            backgroundColor: { sm: "#FEC252" },
          }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ p: 2 }}>
            <Routes>
              <Route path="/tasks" element={<Tasks />} />
              <Route
                path="/journal"
                element={<Journal journals={savedJournalEntries} />}
              />
              <Route
                path="/journal/new-entry"
                element={<JournalEntry onSave={handleSaveJournalEntry} />}
              />
              {savedJournalEntries.map((entry) => (
                <Route
                  key={entry.id}
                  path={`/journal/${entry.id}`}
                  element={
                    <JournalEntryViewer
                      entry={entry}
                      journals={savedJournalEntries}
                    />
                  }
                />
              ))}
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotepadCanvas;
