import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./assets/css/index.scss";

// Components
import { Header, Home, Details,Favs } from "./components";

const Router = () => (
  <BrowserRouter>
    <main>
    <Header />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/favs" component={Favs} />
      <Route path="/details/:id" component={Details} />
      <Redirect to="/home" />
    </Switch>
    </main>
  </BrowserRouter>
);

export default Router;
