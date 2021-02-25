import { Fragment, useState } from "react";


// import Clock from "./components/Clock";
// import Contactos from "./components/Contactos";
// import Contador from "./components/Contador";
// import Forms from "./components/Forms";
// import Listas from "./components/Listas";
import FilmList from "./components/FilmList";
import Cronometer from "./components/Cronometer";

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
    <Fragment>ñ
      <div className="app-container">
        <section className="container">
          {/* 
          <Clock />
          <Listas />
          <Contactos {...{ people }} />
          <Contador />
          <Forms /> */}
          {/* <FilmList /> */}

          <Cronometer />
        </section>


      </div>
    </Fragment>
  );
}

export default App;
