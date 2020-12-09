import React, { Component } from "react";

import { getPokemons } from "./api";

class App extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const {data: { results }} = await getPokemons();
    this.setState({ results });
  }

  render() {
    const { results } = this.state;
    return (
      <ul>
        {results.map(({ name }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }
}

export default App;