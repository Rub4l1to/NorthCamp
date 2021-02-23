import React from "react";

const Film = ({ item }) => {
  const { Rank, Rating, Title, Year } = item;

  return (
    <div className="film">
      <h3 className="film__title">{Title}</h3>
      <span className="film__rank">{Rank}</span>
      <p className="film__rating">{Rating}</p>
      <p className="film__year">{Year}</p>
    </div>
  );
};

export default Film;
