import React, { Fragment } from "react";

import logo from '../../../assets/img/logo.svg'

// Components
import { Search } from "../..";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <figure className="navbar__item navbar__logo">
            <img className="navbar__image" src={logo} alt=""/>
        </figure>
        <Search />
      </div>
    </Fragment>
  );
};

export default Navbar;
