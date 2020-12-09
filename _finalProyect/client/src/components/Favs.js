import React, { Component, Fragment } from "react";
import { loadFavs, deleteFavFilm, favsExist } from "../utils";
import Film from "./Film";
import { getFilm } from "../api";

class Favs extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    await favsExist().then((_) =>
      loadFavs().then((res) => this.setState({ results: JSON.parse(res) }))
    );
  }

  handleDelete = async (e) => {
    deleteFavFilm(await getFilm(e)).then((_) =>
      loadFavs().then((res) => this.setState({ results: JSON.parse(res) }))
    );
  };

  render() {
    const { results } = this.state;
    const { handleDelete } = this;
    return (
      <Fragment>
        <div id="film-list-container">
          {results && (
            <ul className="film-list">
              {results.map(
                ({ data: { id, title, poster_path, vote_average } }, index) => (
                  <li key={index}>
                    <Film
                      {...{
                        id,
                        title,
                        poster_path,
                        vote_average,
                        handleDelete,
                      }}
                    />
                  </li>
                )
              )}
            </ul>
          )}
          {results.length === 0 && (
            <h3>No has seleccionado ninguna pelicula como favorita</h3>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Favs;
