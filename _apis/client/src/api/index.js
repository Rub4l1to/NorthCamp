import axios from "axios";

const url = "https://pokeapi.co/api/v2/";

export const getPokemons = _ => axios.get(`${url}pokemon?limit=200`);
