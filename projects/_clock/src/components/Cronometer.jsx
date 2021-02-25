import React, { Fragment, useEffect, useState } from "react";

const Cronometer = () => {
  const [time, setTime] = useState(0);
  const [targetTime, setTargetTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        handleTransform(targetTime);
    }, 1000);
    return () => {
      setTime(0);
    };
  }, [targetTime]);

  const handleTransform = (seconds) => {
    console.log(seconds);
  };

  return (
    <Fragment>
      <h2>{time}</h2>

      <input
        type="number"
        placeholder="Ingresa el tiempo"
        onChange={(e) => setTargetTime(e.target.value)}
      />

      <button className="cronometer__button">Start</button>
    </Fragment>
  );
};

export default Cronometer;
