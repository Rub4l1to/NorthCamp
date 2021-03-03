import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

const TodoList = () => {
  const [list, setList] = useState([
    { text: "crear componente ToDoList", done: false },
    { text: "crear componente ToDo", done: false },
    { text: "programar clickHandler", done: false },
  ]);
  const [option, setOption] = useState("");

  const createToDo = () => setList([...list, { text: option, done: false }]);

  const handleDone = (id) => {
    list[id].done = !list[id].done;
    setList([...list]);
  };

  return (
    <div>
      {list.map((item, index) => (
        <CheckBox key={"todo-" + index} {...{ index, item, handleDone }} />
      ))}

      <div>
        <input
          type="text"
          onChange={(e) => setOption(e.target.value)}
          value={option}
        />
        <input type="submit" onClick={createToDo} value="Add" />
        <p onClick={() => setList([])}>
          <a href="#">Clear list</a>
        </p>
      </div>
    </div>
  );
};

export default TodoList;
