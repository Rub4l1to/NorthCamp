import React, { Fragment } from "react";

export default function Contactos({ people }) {
  return (
    <Fragment>
    {/* <h3>Contactos</h3> */}
      <ul>
        {people.map(
          (item, index) =>
            item.online && (
              <li className="person" key={index}>
                {item.name}
              </li>
            )
        )}
      </ul>
    </Fragment>
  );
}
