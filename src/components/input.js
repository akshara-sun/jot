import React, { useState } from "react";

export default function Input() {
  const [userInput, handleInputChange] = useState("");

  return (
    <>
      <input
        className="line"
        value={userInput}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </>
  );
}
