import React, { Component, Fragment } from "react";

class App extends Component {
  state = {
    data: [],
    value: "",
  };

  handleChange = ({ target: { value = "" } }) => this.setState({ value });

  handleClick = () =>
    this.setState((state) => ({
      data: [...state.data, state.value],
      value: "",
    }));

  handleDelete = (index) => {
    this.setState((state) => ({
      data: [state.data.filter((_, id) => index !== id)],
    }));
  };

  render() {
    const { value, data } = this.state;
    const { handleChange, handleClick, handleDelete } = this;
    return (
      <Fragment>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Type something..."
        />
        <button onClick={handleClick}>Add</button>
        <ul>
          {data.map((item, index) => (
            <Fragment key={index}>
              <li>
                {item}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            </Fragment>
          ))}
        </ul>
      </Fragment>
    );
  }
}
export default App;
