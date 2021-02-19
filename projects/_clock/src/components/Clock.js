import React, { useEffect, useState } from "react";
import { Segment } from "./Segment";

export default function Clock() {
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
    <div className="clock">
      <p className="clock__time"
      //  onMouseOver= {handleHover}
       >
        <Segment {...{ value: getTime("hours") }} />:
        <Segment {...{ value: getTime("minutes") }} />:
        <Segment {...{ value: getTime("seconds") }} />
      </p>
    </div>
  );
}
