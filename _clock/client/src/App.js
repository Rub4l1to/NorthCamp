import React, { Component, Fragment } from "react";

class App extends Component {
  state = {
    clock: new Date().toLocaleTimeString("es-ES"),
    display: true,
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

  handleClock = () => this.setState((state) => ({ display: !state.display }));

  time = () => new Date().toLocaleTimeString("es-ES");

  render() {
    const { clock, display } = this.state;
    return (
      <Fragment>
        {display && <h3>{clock}</h3>}
        <button onClick={this.handleClock}>
          {display ? "Hide clock" : "Show clock"}
        </button>
      </Fragment>
    );
  }
}
export default App;
