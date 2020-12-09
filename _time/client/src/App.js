import React, { Component, Fragment } from "react";

class App extends Component {
  intervalId = null;
  state = {
    clock: this.time(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ clock: this.time() }, () =>
        console.log("Se ha cambiado la hora")
      );
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  date = () => new Date().toLocaleDateString();

  time = () => new Date().toLocaleTimeString();

  render() {
    const { clock } = this.state;
    return (
      <Fragment>
        <h3>{`Dia: ${this.date()}`}</h3>
        <h3>{`Hora: ${clock}`}</h3>
      </Fragment>
    );
  }
}

export default App;
