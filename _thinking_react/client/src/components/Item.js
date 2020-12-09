import React from "react";

const Item = ({ name, price, stocked }) => (
  <div className="item-container">
    <span className={stocked ? 'item-out-of-stock' : ''}>{name}</span>
    <div>{price}</div>
  </div>
);

export default Item;
