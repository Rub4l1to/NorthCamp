import React, { Component, Fragment } from "react";
import Input from "./components/Input";
import Rot from "./components/Rot";

import { getEncrypt } from "./utils";
import Display from "./components/Display";

class App extends Component {
  alphabet = [
    "a",
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // Guardamos los datos que nos envian los componentes y otra variable para almacenar el mensaje
  state = {
    value: "",
    number: 0,
    msgCesar: "",
  };

  // Cuando el usuario agregue un texto:
  // Se guardará en el estado
  // Se enviará el texto agregado, el abecedario y el numero de rotación
  handleChange = ({ target: { value = "" } }) =>
    this.setState((state) => ({
      value,
      msgCesar: getEncrypt(value, this.alphabet, state.number),
    }));

  // Cuando el usuario agregue el numero de rotación:
  // Se guardará en el estado
  // Se enviará el texto almacenado en el state, el abecedario y el numero de rotación agregado
  handleChangeNumber = ({ target: { value = 0 } }) =>
    this.setState((state) => ({
      number: value,
      msgCesar: getEncrypt(state.msgCesar, this.alphabet, value),
    }));

  render() {
    const { value, number, msgCesar } = this.state;
    const { handleChange, handleChangeNumber } = this;
    return (
      <Fragment>
        {/* Enviamos la variable string del state padre y la función que se encargará de traer el string que agregue el usuario */}
        <Input {...{ value, handleChange }} />
        {/* Enviamos la varibale number del state padre y la función que se encargará de traer el string que agregue el usuario */}
        <Rot {...{ number, handleChangeNumber }} />
        {/* Enviamos el resultado y lo mostramos */}
        <Display {...{ msgCesar }} />
      </Fragment>
    );
  }
}
export default App;
