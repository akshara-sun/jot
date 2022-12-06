import React from "react";
import StickyNoteIcon from "@mui/icons-material/StickyNote2";
import NotepadIcon from "@mui/icons-material/SubjectSharp";
import BlankScrollIcon from "@mui/icons-material/HistoryEduSharp";

const CANVAS_DATA = [
  {
    label: "Stickies",
    value: "stickies",
    icon: <StickyNoteIcon />,
    path: "/stickies",
  },
  {
    label: "Notepad",
    value: "notepad",
    icon: <NotepadIcon />,
    path: "/notepad",
  },
  {
    label: "Draw",
    value: "draw",
    icon: <BlankScrollIcon />,
    path: "/draw",
  },
];

export default CANVAS_DATA;
