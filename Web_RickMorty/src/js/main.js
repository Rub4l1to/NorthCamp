import { drawCards } from "./utils/generic";
import { getCharactersPage } from "./utils/querys";

let characters = [];

export const main = () => {
  // Hacemos la peticion con el numero de personajes que queremos
  getCharacters(55, drawCards);
};

export const getCharacters = (n, callback) => {
  let promises = [];

  for (let i = 0; i <= n / 20; i++) {
    promises.push(getCharactersPage(i));
  }
  Promise.all(promises).then((pages) => {
    pages.map((item) => item.forEach((x) => characters.push(x)));
    callback(characters);
  });
};
