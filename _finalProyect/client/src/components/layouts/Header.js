import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <Fragment>
    <header>
      {/*  LOGO  */}
      <div id="logo-container">
        <span>
          <h1>
            <strong>Films</strong>Proyect
          </h1>
        </span>
      </div>

      {/*  MENU  */}
      <nav id="nav-container">
        <ul>
          <li>
            <NavLink to="/home" activeClassName="active">
              {/* <span>
                <i class="fas fa-home"></i>
              </span> */}
              <p>Inicio</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favs" activeClassName="active">
              {/* <span>
                <i class="fas fa-star"></i>
              </span> */}
              <p>Mi lista</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </Fragment>
);

export default Header;
