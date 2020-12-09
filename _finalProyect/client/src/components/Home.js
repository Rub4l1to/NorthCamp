import React, { Component, Fragment } from "react";

import { getFilms } from "../api";

import { Film } from "../components";

class Home extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const {
      data: { results },
    } = await getFilms();
    this.setState({ results, details: this.props.display });
  }

  render() {
    const { results } = this.state;
    return (
      <Fragment>
        <div id="film-list-container">
          <ul className="film-list">
            {results.map(({ id, title, poster_path, vote_average }, index) => (
              <li className="animated fadeIn film" key={index}>
                <Film {...{ id, title, poster_path, vote_average }} />
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Home;
