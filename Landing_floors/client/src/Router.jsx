import React, { Fragment } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// Components
import { Floors, Navbar } from "./components";
// import { Landing, Login, Navbar, Register } from "./components/Index";

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <header className="grid-container">
        <Navbar />
      </header>
      <Switch>
        <section className="grid-container floors">
          <Route exact path="/" component={Floors} />
        </section>
        <Redirect to="/" />
      </Switch>
    </Fragment> 
  </BrowserRouter>
);

export default Router;
