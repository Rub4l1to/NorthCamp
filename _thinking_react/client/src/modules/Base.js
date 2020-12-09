import React, { Component } from "react";

import DrillDown from "../components/DrillDown";
import Table from "../components/Table";

import data from "../api";
import { filterBySearch, filterByStock, pipeWithArgs } from "../utils";

class Base extends Component {
  state = {
    value: "",
    checked: false,
  };

  handleSearch = ({ target: { value = "" } }) => this.setState({ value });

  handleStock = ({ target: { checked = false } }) => this.setState({ checked });

  render() {
    const { value, checked } = this.state;
    const { handleSearch, handleStock } = this;
    return (
      <div className="base-container">
        <DrillDown {...{ value, checked, handleSearch, handleStock }} />
        <Table
          {...{
            data: pipeWithArgs(filterBySearch, filterByStock)(
              data,
              value,
              checked
            )
          }}
        />
      </div>
    );
  }
}

export default Base;
