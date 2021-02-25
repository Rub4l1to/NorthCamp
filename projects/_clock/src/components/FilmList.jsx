import React, { useState, useEffect } from "react";
import Film from "./Film";

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/d-antesque/resources/master/films.json"
    );
    const res = await data.json();
    setFilms(res);
  };

  return (
    <div className="container films-container">
      {films.slice(0, 20).map((item, index) => (
        <Film key={index} {...{ item }} />
      ))}
    </div>
  );
};

export default FilmList;
