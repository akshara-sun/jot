import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Thumbnail from './thumbnail';


const HomePage = ()  => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '70vh' 
    }}>
      <Grid container>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h2">
            Welcome to Jot
          </Typography>
          <Typography variant="subtitle1" sx={{ pb: 2}}>
            Pick your canvas
          </Typography>
          <Grid 
            item 
            container 
            columnSpacing={3} 
            sx={{ justifyContent: 'center' }}
          >
            <Grid item xs={3}>
              <Thumbnail 
              sticky={true}
              name="Stickies" />
            </Grid>  
            <Grid item xs={3}>
              <Thumbnail name="Blank canvas" />
            </Grid>            
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
