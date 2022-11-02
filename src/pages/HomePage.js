import React from "react";
import { Box, Grid, Typography, Grow } from "@mui/material";
import { Link } from "react-router-dom";
import Thumbnail from "../components/Thumbnail";
import notepad from "../assets/images/notepad.png";
import JotIcon from "../assets/images/jot-icon.png";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "100vh", sm: "70vh" },
        p: { xs: 4, sm: 0 },
      }}>
      <Grid container>
        <Grid item xs={12} textAlign="center">
          <Grow in={true} timeout={500}>
            <Typography
              sx={{
                fontSize: { xs: "2.3rem", sm: "3rem" },
              }}>
              Welcome to Jot
              <Box component="img" src={JotIcon} height="60px" />
            </Typography>
          </Grow>
          <Grow in={true} timeout={1000}>
            <Typography variant="subtitle1" sx={{ mb: 2, color: "orange" }}>
              Pick your canvas
            </Typography>
          </Grow>
        </Grid>
        <Grid
          item
          container
          columnSpacing={3}
          rowSpacing={3}
          direction={{ xs: "column", sm: "row" }}
          sx={{ justifyContent: "center" }}>
          <Grow in={true} timeout={2000}>
            <Grid item xs={3} component={Link} to="/stickies">
              <Thumbnail color="#EBD4A2" name="Stickies" />
            </Grid>
          </Grow>
          <Grow in={true} timeout={3000}>
            <Grid item xs={3} component={Link} to="/notepad">
              <Thumbnail
                color="none"
                image={`url(${notepad})`}
                name="Notepad"
              />
            </Grid>
          </Grow>
          <Grow in={true} timeout={4000}>
            <Grid item xs={3} component={Link} to="/draw">
              <Thumbnail name="Draw" />
            </Grid>
          </Grow>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
