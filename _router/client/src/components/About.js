import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const About = () => (
  <Fragment>
    <h1>About</h1>
    <Link to="/home">Return to Home page</Link>
  </Fragment>
);

export default About;
