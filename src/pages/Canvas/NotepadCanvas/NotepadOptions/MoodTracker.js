import React from "react";
import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import VeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import DissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import NeutralIcon from "@mui/icons-material/SentimentNeutral";
import SatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import VerySatisfiedIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const MoodTracker = () => {
  return (
    <Box>
      <Typography variant="overline" sx={{ opacity: "40%" }}>
        Mood:
      </Typography>
      <ButtonGroup>
        <IconButton>
          <VeryDissatisfiedIcon />
        </IconButton>
        <IconButton>
          <DissatisfiedIcon />
        </IconButton>
        <IconButton>
          <NeutralIcon />
        </IconButton>
        <IconButton>
          <SatisfiedIcon />
        </IconButton>
        <IconButton>
          <VerySatisfiedIcon />
        </IconButton>
      </ButtonGroup>
    </Box>
  );
};

export default MoodTracker;
