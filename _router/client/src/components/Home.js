import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <div><Link to="/about">To about page</Link></div>
    <div><Link to="/organize">To organize page</Link></div>
  </Fragment>
);

export default Home;
