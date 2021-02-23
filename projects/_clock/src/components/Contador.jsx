import React, { Fragment, useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const handleCont = () => setContador(contador + 1);

  return (
    <Fragment>
      <div>
        <button onClick={handleCont}>Incrementar</button>
      </div>
      <div className="counter">{contador}</div>
    </Fragment>
  );
}
