import React, { Fragment } from "react";

import { Link } from "react-router-dom";
const Film = ({ id, title, vote_average, poster_path, handleLiked, overview, handleDelete }) =>
    <Fragment>
        <div id="" className="fadeIn film-container">
            <Link to={`/details/${id}`}>
                <img className={(handleLiked ? "img-details" : "img-normal")} alt="poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                {handleLiked && <h5> {title}</h5>}
                {handleLiked && <p>Nota: <span>{vote_average}</span></p>}
                {handleLiked && <p>{overview}</p>}
            </Link>
            <div className="button-container">
                {handleDelete && <button className="button" onClick={() => handleDelete(id)}>Eliminar de favoritos</button>}
                {handleLiked && <button className="button" onClick={() => handleLiked(id)}>Agregar a favoritos</button>}
                {handleLiked && <Link to={`/home`}> <button className="button">Volver</button></Link>}
            </div>

        </div>
    </Fragment>;

export default Film;
