import React from "react";

const Rot = ({ number, handleChangeNumber }) => (
  <input type="number" value={number} onChange={handleChangeNumber} />
);
export default Rot;
