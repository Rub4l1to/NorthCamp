import { Fragment, useState } from "react";
import "./index.css";

import Contactos from "./components/Contactos";
import Contador from "./components/Contador";
import Forms from "./components/Forms";
import Listas from "./components/Listas";
import FilmList from "./components/FilmList";
import TodoList from "./components/TodoList";
import { useRoutes, A, usePath } from "hookrouter";
import Tools from "./components/Tools";
import Slider from "./components/Slider";


function App() {
  const [people, setPeople] = useState([
    { name: "Raul", online: false },
    { name: "Alex", online: true },
    { name: "Mama", online: false },
    { name: "Cesar", online: true },
    { name: "Vane", online: true },
    { name: "Carlos", online: true },
  ]);

  const routes = {
    "/": () => <Forms/>,
    "/tools*": () => <Tools />,
    "/todolist": () => <TodoList />,
    "/films": () => <FilmList />,
    "/lists": () => <Listas />,
    "/contactos": () => <Contactos {...{ people }} />,
    "/contador": () =>  <Contador />,
    "/slide": () => <Slider />

  };

  const components = useRoutes(routes);
  const path = usePath();
  return (
    <Fragment>
      <div className="app-container">
        <section className="container">
          {components}
        </section>
      
      </div>
    </Fragment>
  );
}

export default App;
