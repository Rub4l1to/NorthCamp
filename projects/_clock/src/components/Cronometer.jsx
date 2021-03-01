import React, { Fragment, useEffect, useState } from "react";
import { Segment } from "./Segment";

const Cronometer = () => {
  const [time, setTime] = useState(0);
  const [targetTime, setTargetTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (time) setTime(time - 1);
    }, 1000);

    return () => {
      clearTimeout();
    };
  }, [time]);

  const getTime = (getData) => {
    let info = 0;
    if (getData === "hours") info = Math.floor(time / (60 * 60));
    if (getData === "minutes") info = Math.floor((time / 60) % 60);
    if (getData === "seconds") info = time % 60;
    return info < 10 ? "0" + info : info;
  };

  return (
    <Fragment>
      <p className="clock__time">
        <Segment {...{ value: getTime("hours") }} />:
        <Segment {...{ value: getTime("minutes") }} />:
        <Segment {...{ value: getTime("seconds") }} />
      </p>

      <input
        type="number"
        placeholder="Ingresa el tiempo"
        onChange={(e) => setTargetTime(e.target.value)}
      />

      <button
        className="cronometer__button"
        onClick={() => setTime(targetTime)}
      >
        {" "}
        Start{" "}
      </button>
    </Fragment>
  );
};

export default Cronometer;
