import React, { Fragment, useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("")
  const [guest, setGuest] = useState("")

  return (
    <Fragment>
      <div className="search">
        <div className="search__item">
          <div className="search__input search__input--border">
            <input value={location} onChange={(e) => setLocation(e.target.value)} className="search__location" type="text" placeholder="Add location" />
          </div>
          <div className="search__input search__input--border">
            <input value={guest} onChange={(e) => setGuest(e.target.value)} className="search__guest" type="text" placeholder="Add guest" />
          </div>
          <div className="search__icon"><i className="fas fa-search"></i></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
