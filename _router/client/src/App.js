import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Organize from "./components/Organize";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/organize" component={Organize} />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
