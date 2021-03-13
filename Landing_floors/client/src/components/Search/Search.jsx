import React, { Fragment } from "react";

const Search = () => {
  return (
    <Fragment>
      <div className="search">
        <div className="search__item">
          <div className="search__input search__input--border">
            <input className="search__location" type="text" placeholder="Add location"/>
          </div>
          <div className="search__input search__input--border">
            <input className="search__guest" type="text" placeholder="Add guest"/>
          </div>
          <div className="search__icon">
            <i class="fas fa-search"></i>
            S
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
