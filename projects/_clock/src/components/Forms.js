import React, { Fragment, useState } from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);

  const handleUsername = (ev) => setUsername(ev.target.value);
  const handlePassword = (ev) => setPassword(ev.target.value);
  const handleSecondPassword = (ev) => setSecondPassword(ev.target.value);
  const handleEmail = (ev) => setEmail(ev.target.value);

  const handleSubmit = () => {
    password !== secondPassword ? setCheck(true) : setCheck(false)
  }

  return (
    <Fragment>
     
      <div>
        <input
          type="text"
          onChange={handleUsername}
          placeholder="Nombre de usuario"
          value={username}
        />
        <input type="password" onChange={handlePassword} value={password} />
        <input
          type="password"
          onChange={handleSecondPassword}
          value={secondPassword}
          className={check ? 'red' : null}
           
        />
        
     
        <input
          type="email"
          onChange={handleEmail}
          placeholder="Correo"
          value={email}
        />
        <input type="submit" onClick={handleSubmit} value="Enviar" />
      </div>
      {check &&  <h1 style={{color: "red"}}>Las contraseñas no coinciden</h1>}
     
    </Fragment>
  );
}
