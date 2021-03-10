import React, { Fragment, useEffect, useState } from "react";
import { Segment } from "./Segment";

const Clock = () => {
  const [date, setDateState] = useState(new Date());

  useEffect(() => {
    handdleDate();
  }, [date]);

  const handdleDate = () => {
    const interval = setInterval(() => {
      setDateState(new Date());
    }, 1000);
    return () => clearInterval(interval);
  };

  // const handleHover = () =>  setDateState(new Date());

  const getTime = (getData) => {
    let info = 0;
    if (getData === "hours") info = date.getHours();
    if (getData === "minutes") info = date.getMinutes();
    if (getData === "seconds") info = date.getSeconds();
    return info < 10 ? "0" + info : info;
  };

  return (
    <Fragment>
      <Segment {...{ value: getTime("hours") }} />:
      <Segment {...{ value: getTime("minutes") }} />:
      <Segment {...{ value: getTime("seconds") }} />
    </Fragment>
  );
};
export default Clock;
