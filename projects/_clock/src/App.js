import { Fragment, useState } from "react";

import Clock from "./components/Clock";
import Contactos from "./components/Contactos";
import Contador from "./components/Contador";
import Forms from "./components/Forms";
import Listas from "./components/Listas";
import FilmList from "./components/FilmList";
import Cronometer from "./components/Cronometer";
import TodoList from "./components/TodoList";
import { useRoutes } from "hookrouter";

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
    "/": () => <Clock />,
    "/todolist": () => <TodoList />,
    "/films": () => <FilmList />,
    "/lists": () => <Listas />,
    "/contactos": () => <Contactos {...{ people }} />,
    "/contador": () =>  <Contador />,
    "/form": () => <Forms/>,
    "/crono": () => <Cronometer />
  };

  const components = useRoutes(routes);

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
