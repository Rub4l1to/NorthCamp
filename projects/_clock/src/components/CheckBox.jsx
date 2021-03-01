import React, { useState } from "react";

const CheckBox = ({ text }) => {
  const [done, setDone] = useState(false);

  return (
    <div>
      <label className={done ? "cross" : ""} htmlFor="option">
        <input
          onClick={() => !done ? setDone(true) : setDone(false)}
          type="checkbox"
          name="option"
          value={text}
        />
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
