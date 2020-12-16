// Ejercicio 1
const isEmpty = (data) => (data ? true : false);
console.log(isEmpty(""));

// Ejercicio 2
const concat = (arr) => arr.join("");
console.log(concat(["hola", "que", "tal"]));

// Ejercicio 3
const space = (string) =>
  string.indexOf(" ") !== -1 ? "Hay espacios" : "No hay espacios";
console.log(space("hola que"));

// Ejercicio 4
const separate = (arr) => arr.split(" ");
console.log(separate("hola que tal estas northcamp"));

// Ejercicio 5
const spaceNum = (string) => `Espacios: ${string.split(" ").length - 1} `;
console.log(spaceNum("hola que"));

// Ejercicio 6
console.log(
  "3 20 6 1"
    .split(" ")
    .map((item) => parseInt(item))
    // Acumulador - (acc es lo que acumula) (x es cada interaccion 'item')
    .reduce((acc, x) => acc + x, 0)
);

// Ejercicio - Top
const mostRepeatLetter = (palabra) => {
  let text = palabra.split("");
  let array = [];
  text.filter((c, i) => existeInArray(array, c)); // y está en todas
};

const existeInArray = (arr, letter) =>
  arr.find((item) => item.letra === letter);

mostRepeatLetter("adrian");
