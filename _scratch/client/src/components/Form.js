import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Form extends Component {
  render() {
    return (
        <div>
           <h2>Hey bro!</h2>
            <label>Nombre</label>
            <input type="text" id="texto" placeholder="Type something" />
        </div>
    );
  }
}

const wrapper = document.getElementById("main")
wrapper ? ReactDOM.render(<Form />,wrapper) : false