import { Fragment, useState } from "react";
import Clock from "./components/Clock";
import Contactos from "./components/Contactos";
import Contador from "./components/Contador";
import Forms from "./components/Forms";

function App() {
  const [people, setPeople] = useState([
    { name: "Raul", online: false },
    { name: "Alex", online: true },
    { name: "Mama", online: false },
    { name: "Cesar", online: true },
    { name: "Vane", online: true },
    { name: "Carlos", online: true }
  ]);

  return (
    <Fragment>
      <div className="app-container">
        <section className="container">
          <Clock />
        </section>
        <section className="contactos">
          <Contactos {...{ people }} />
        </section>    
        <section className="counter">
          <Contador />
        </section>

        <section>
          <Forms />
        </section>
      </div>
    </Fragment>
  );
}

export default App;
