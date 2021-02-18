import { Fragment, useState } from "react";
import Clock from "./components/Clock";
import Contactos from "./components/Contactos";

function App() {
  const [people, setPeople] = useState([
    { name: "Raul", online: false },
    { name: "AA Alex", online: true },
    { name: "Mama", online: false },
    { name: "Cesar hijoputa", online: true },
    { name: "Cesar II hijoputa", online: true },
    { name: "Carlos", online: true },
  ]);

  return (
    <Fragment>
      <div className="app-container">
        <section className="container">
          <Clock />
        </section>
        <section>
          <Contactos {...{ people }} />
        </section>
      </div>
    </Fragment>
  );
}

export default App;
