import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

const TodoList = () => {
  const [list, setList] = useState([
    "crear componente TodoList",
    "crear componente Todo",
    "programar clickHandler",
  ]);
  const [option, setOption] = useState("");

  const createToDo = () => setList([...list, option]);

  return (
    <div>
      {list.map((item, index) => (
        <CheckBox key={index} {...{ text: item }} />
      ))}

      <div>
        <input
          type="text"
          onChange={(e) => setOption(e.target.value)}
          value={option}
        />
        <input type="submit" onClick={createToDo} value="Add" />
        <p onClick={() => setList([])}>
          {" "}
          <a href="#">Clear list</a>
        </p>
      </div>
    </div>
  );
};

export default TodoList;
