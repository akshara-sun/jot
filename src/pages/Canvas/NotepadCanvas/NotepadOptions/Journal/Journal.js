import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Thumbnail from "../../../../../components/Thumbnail";
import NoDataCTA from "../../../../../components/NoDataCTA";
import { NavLink } from "react-router-dom";

const Journal = () => {
  const journalEntries = JSON.parse(localStorage.getItem("journalEntries"));
  return (
    <Grid container>
      {!journalEntries ? (
        <Grid item xs={12}>
          <NoDataCTA>
            <Typography variant="h6" sx={{ pb: 2 }}>
              You don't have any journal entries yet. Click below to get
              started.
            </Typography>
            <Button
              component={NavLink}
              variant="contained"
              sx={{
                backgroundColor: "orange",
                "&:hover": { backgroundColor: "black" },
              }}
              to="new-entry">
              New
            </Button>
          </NoDataCTA>
        </Grid>
      ) : (
        <>
          <Grid item xs={11}>
            <Typography variant="overline">Saved entries</Typography>
          </Grid>
          <Grid item xs={1}>
            <Button
              fullWidth
              component={NavLink}
              variant="contained"
              sx={{
                backgroundColor: "orange",
                "&:hover": { backgroundColor: "black" },
              }}
              to="new-entry">
              New
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Grid container item columnGap={2}>
              {journalEntries.map((entry, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Thumbnail
                    name={`Entry ${index + 1} - ${entry.date} ${entry.time}`}
                    color="#FFEBBB"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Journal;
