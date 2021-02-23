import React, { Fragment } from "react";

const Segment = ({ value }) => {
  return (
    <Fragment>
      <span className="clock__value">{value}</span>
    </Fragment>
  );
};

export { Segment };
