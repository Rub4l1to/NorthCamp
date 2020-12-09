import React, { Component, Fragment } from "react";
import { getFilm } from "../api";
import { Film } from ".";
import { newFavStorage } from "../utils";

class Details extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const { data } = await getFilm(this.props.match.params.id);
    this.setState({ results: data });
  }

  handleLiked = async e => newFavStorage(await getFilm(e));

  render() {
    const {
      results: { id, title, poster_path, vote_average, overview },
    } = this.state;
    const { handleLiked } = this;
    return (
      <Fragment>
        <div id="film-list-container">
          <div id="film-list-details">
            <Film
              {...{ id, title, poster_path, vote_average, overview, handleLiked }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Details;
