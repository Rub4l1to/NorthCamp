import { drawCards, clearList } from "./utils/generic";
import { getCharactersPage } from "./utils/querys";

let characters = [];

export const main = () => {
  // Hacemos la peticion con el numero de personajes que queremos
  getCharacters(55, drawCards);
};

// Se encargara de realizar las peticiones
export const getCharacters = (n, callback) => {
  let promises = [];

  // Agregamos todos las promesas a un array general
  for (let i = 1; i <= n / 20; i++) {
    promises.push(getCharactersPage(i));
  }

  // Pintamos los resultados
  Promise.all(promises).then((pages) => {
    pages.map((item) => item.forEach((x) => characters.push(x)));
    callback(characters);
  });
};

// Teniendo en cuenta lo que el usuario busque
export const getCharacter = (e) => {
  clearList();
  drawCards(
    characters.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
  );
};

// Interaccion con el input
document.querySelector("#seeker").addEventListener("keydown", getCharacter);