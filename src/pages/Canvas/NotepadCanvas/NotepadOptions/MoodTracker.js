import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import VeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import DissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import NeutralIcon from "@mui/icons-material/SentimentNeutral";
import SatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import VerySatisfiedIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const moods = [
  {
    value: "very-dissatisfied",
    icon: <VeryDissatisfiedIcon />,
  },
  {
    value: "dissatisfied",
    icon: <DissatisfiedIcon />,
  },
  {
    value: "neutral",
    icon: <NeutralIcon />,
  },
  {
    value: "satisfied",
    icon: <SatisfiedIcon />,
  },
  {
    value: "very-satisfied",
    icon: <VerySatisfiedIcon />,
  },
];
const MoodTracker = () => {
  return (
    <Box>
      <Typography variant="overline">Mood:</Typography>
      {moods.map((mood) => (
        <IconButton key={mood.value}>{mood.icon}</IconButton>
      ))}
    </Box>
  );
};

export default MoodTracker;
