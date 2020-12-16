// Ejercicio 1
console.log(`----- Multiplicacion -----`);
const mul = (n1, n2, n3) => n1 * n2 * n3;
console.log(mul(1, 2, 3));

// Ejercicio 2
console.log(`----- Numeros entre medias descendente -----`);
const descend = (n) => {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
};
descend(5);

// Ejercicio 3
console.log(`----- Numero mayor -----`);
const higher = (n1, n2) => (n1 > n2 ? n1 : n2);
console.log(higher(4, 5));

// Ejercicio 4
console.log(`----- Numero mayor TOP -----`);
const higherNum = (data) => {
  let higher = 0;
  for (const item of data) {
    if (item > higher) higher = item;
  }
  return higher;
};
console.log(higherNum([50, 2, 30, 90, 5]));
