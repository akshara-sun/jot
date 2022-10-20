import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import NoDataCTA from "../components/NoDataCTA.js";
import NavBar from "../components/NavBar";
import Sticky from "../components/Sticky";

const StickiesCanvas = () => {
  const [stickies, setStickies] = useState([]);

  const handleAddSticky = () => {
    const newSticky = {
      id: new Date().getTime(),
      text: "",
    };
    setStickies([...stickies, newSticky]);
  };

  const handleDeleteSticky = (id) => {
    setStickies(stickies.filter((sticky) => sticky.id !== id));
  };

  return (
    <Grid container direction="column" sx={{ height: "100vh" }}>
      <Grid item>
        <NavBar />
      </Grid>
      <Grid item sx={{ flexGrow: 1, overflow: "auto" }}>
        {stickies.length > 0 ? (
          <>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
                <Button
                  variant="contained"
                  onClick={handleAddSticky}
                  color="success"
                  sx={{
                    py: 2,
                    px: 4,
                  }}
                >
                  Add Sticky
                </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ p: 2 }}>
            {stickies.map((sticky) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={sticky.id}>
                <Sticky
                  visibility="visible"
                  onClose={() => handleDeleteSticky(sticky.id)}
                />
              </Grid>
            ))}
            </Grid>
            </>
        ) : (
          <NoDataCTA label="Add Sticky" onClick={handleAddSticky} />
        )}
      </Grid>
    </Grid>
  );
}

export default StickiesCanvas;