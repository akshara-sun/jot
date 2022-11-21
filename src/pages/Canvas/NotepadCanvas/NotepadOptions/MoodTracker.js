import React, { useState } from "react";
import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import VeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import DissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import NeutralIcon from "@mui/icons-material/SentimentNeutral";
import SatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import VerySatisfiedIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const MoodTracker = () => {
  const [selected, setSelected] = useState(0);

  const moods = [
    {
      id: 1,
      icon: <VeryDissatisfiedIcon />,
      color: "#fac76e",
    },
    {
      id: 2,
      icon: <DissatisfiedIcon />,
      color: "#cdc066",
    },
    {
      id: 3,
      icon: <NeutralIcon />,
      color: "#a2b666",
    },
    {
      id: 4,
      icon: <SatisfiedIcon />,
      color: "#7baa6b",
    },
    {
      id: 5,
      icon: <VerySatisfiedIcon />,
      color: "#589c72",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        opacity: "40%",
      }}>
      <Typography variant="overline">Mood:</Typography>
      <ButtonGroup>
        {moods.map((mood) => (
          <IconButton
            key={mood.id}
            onClick={() => setSelected(mood.id)}
            sx={{
              backgroundColor:
                selected === mood.id ? mood.color : "transparent",
            }}>
            {mood.icon}
          </IconButton>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default MoodTracker;
