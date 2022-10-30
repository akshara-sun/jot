import React from "react";
import { Box, Grid, Typography, Grow } from "@mui/material";
import { Link } from "react-router-dom";
import Thumbnail from "../components/Thumbnail";
import notepad from "../assets/images/notepad.png";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}>
      <Grid container>
        <Grid item xs={12} textAlign='center'>
          <Grow in={true} timeout={500}>
            <Typography variant='h2'>Welcome to Jot</Typography>
          </Grow>
          <Grow in={true} timeout={1000}>
          <Typography variant='subtitle1' sx={{ pb: 2 }}>
            Pick your canvas
            </Typography>
          </Grow>
          <Grid
            item
            container
            columnSpacing={3}
            sx={{ justifyContent: "center" }}>
            <Grow in={true} timeout={2000}>
              <Grid item xs={3} component={Link} to='/stickies'>
                <Thumbnail color='#EBD4A2' name='Stickies' />
              </Grid>
            </Grow>
            <Grow in={true} timeout={3000}>
              <Grid item xs={3} component={Link} to='/notepad'>
                <Thumbnail
                  color='none'
                  image={`url(${notepad})`}
                  name='Notepad'
                />
              </Grid>
            </Grow>
            <Grow in={true} timeout={4000}>
              <Grid item xs={3} component={Link} to='/blank-canvas'>
                <Thumbnail name='Blank canvas' />
              </Grid>
            </Grow>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
