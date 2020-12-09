import React, { Fragment } from "react";
import Category from "./Category";
import Item from "./Item";

import { getUniqueCategory } from "../utils";

const Table = ({ data }) => (
  <div className="table-container">
    <div className="tags">
      <label>Name</label>
      <label>Price</label>
    </div>
    <div id="table-data">
      {data.map(({ category, name, price, stocked }, index, arr) => (
        <Fragment key={index}>
          {getUniqueCategory(index, category, arr) && (
            <Category {...{ category }} />
          )}
          <Item {...{ name, price, stocked }} />
        </Fragment>
      ))}
    </div>
  </div>
);

export default Table;
