import React, { Fragment } from "react";
import Display from "./components/Display";

import { connect } from "react-redux";
import { increment,decrement } from "./actions";

const App = ({increment,decrement}) => (
  <Fragment>
    <div>
      <button onClick={increment}>Increment</button>
    </div>
    <Display />
    <div>
      <button onClick={decrement}>Decrement</button>
    </div>
  </Fragment>
);

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(null,mapDispatchToProps)(App);
