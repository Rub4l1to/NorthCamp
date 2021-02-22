import React, { Fragment, useState } from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);

  const validate = (e) => {
    e.preventDefault();
    password !== secondPassword ? setCheck(true) : setCheck(false);
  };

  return (
    <Fragment>
      <form onSubmit={validate}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nombre de usuario"
          value={username}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          onChange={(e) => setSecondPassword(e.target.value)}
          value={secondPassword}
          className={check ? "red" : null}
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo"
          value={email}
        />
        <input type="submit" value="Enviar" />
      </form>
      {check && <h1 style={{ color: "red" }}>Las contraseñas no coinciden</h1>}
    </Fragment>
  );
}
