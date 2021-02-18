import React, { Fragment } from "react";

export default function Contactos({ people }) {
  return (
    <Fragment>
      <ul>
        {people.map((item, index) =>
          item.online && (<li className="person" key={index}>{item.name}</li>)
        )}
      </ul>
    </Fragment>
  );
}
