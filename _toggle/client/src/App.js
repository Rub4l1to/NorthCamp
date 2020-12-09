import React, { Component } from "react";
import Display from "./components/Display";

class App extends Component {
  state = {
    msg: "OFF",
  };

  handleOn = () => {
    this.setState({msg: "ON"} , () => console.log(this.state.msg));

  }
  handleOff = () => {
    this.setState({msg: "OFF"} , () => console.log(this.state.msg));
  }

  render() {
    const {msg} = this.state;
    return (
      <div className="App">
        <button onClick={this.handleOff}>Turn off!</button>
        <Display msg={msg} />
        <button onClick={this.handleOn}>Turn on!</button>
      </div>
    );
  }
}

export default App;
