import React, { Fragment } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// Components
import { Navbar } from "./components";
// import { Landing, Login, Navbar, Register } from "./components/Index";

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <header className="grid-container">
        <Navbar />
      </header>
      <Switch>
        <section className="grid-container"></section>
        {/* <Route exact path="/" component={Landing} /> */}

        <Redirect to="/" />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Router;
