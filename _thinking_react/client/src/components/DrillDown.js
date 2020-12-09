import React from "react";

const DrillDown = ({ search, checked, handleSearch, handleStock }) => (
  <div className="drilldown-container">
    <input
      value={search}
      type="text"
      onChange={handleSearch}
      placeholder="Search.."
    />
    <div className="chekbox">
      <input checked={checked} type="checkbox" onChange={handleStock} />
      <label>Only show products in stock</label>
    </div>
  </div>
);

export default DrillDown;
