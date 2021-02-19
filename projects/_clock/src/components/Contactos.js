import React, { Fragment } from "react";

export default function Contactos({ people }) {
  let data = people.filter((item) => item.online);
  let divs = data.map((item) => <div> {item.name}</div>);

  return <Fragment>{divs}</Fragment>;
}
