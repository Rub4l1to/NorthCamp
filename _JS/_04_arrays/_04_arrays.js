let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Ejercicio 1
console.log(`----- Listado -----`);
for (const item of lista) {
  console.log(item);
}

// Ejercicio 2 - Mayores de 5
console.log(`----- Mayores de 5 -----`);
for (const item of lista) {
  if (item > 5) console.log(item);
}

// Ejercicio 3 - Pares
console.log(`----- Pares -----`);
for (const item of lista) {
  if (item % 2 === 0) console.log(item);
}

// Ejercicio 4 - Suma
console.log(`----- Suma for of -----`);
let sumaForOf = 0;
for (const item of lista) {
    sumaForOf += item;
}
console.log(`Resultado de la suma: ${sumaForOf}`);

// Ejercicio 5 -
console.log(`----- Suma For -----`);
let sumaFor = 0;
for (let i = 0; i < lista.length; i++) {
    sumaFor += lista[i];
}
console.log(`Resultado de la suma: ${sumaFor}`);
