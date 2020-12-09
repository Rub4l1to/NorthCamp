import React from "react";

const Input = ({ value, handleChange }) => (
  <input
    type="text"
    value={value}
    onChange={handleChange}
    placeholder="Type something..."
  />
);

export default Input;
