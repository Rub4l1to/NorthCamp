import axios from "axios";

const key = "13f55cdc863fb7b55567782f8e38ded4";
const url = `https://api.themoviedb.org/3/movie`;

export const getFilms = (_) => axios.get(`${url}/now_playing?api_key=${key}`);
export const getFilm = id => axios.get(`${url}/${id}?api_key=${key}`);
