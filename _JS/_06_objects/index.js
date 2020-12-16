// Ejercicio 1
let data = {
  nombre: "Wiskas",
  raza: "Pitbull",
  peso: "100kg",
};

// Ejercicio 2
data.peso = {
  unidad: "kg",
  cantidad: "100",
};

console.log(data);

// Ejercico 3
let lista = [
  {
    nombre: "garbanzos",
    precio: 1.4,
  },

  {
    nombre: "lentejas",
    precio: 1.2,
  },
  {
    nombre: "aceite",
    precio: 0.8,
  },
  {
    nombre: "pizza",
    precio: 1.4,
  },
  {
    nombre: "humus",
    precio: 1.4,
  },
  {
    nombre: "agua",
    precio: 1,
  },
];

// Ejercicio 4
lista.map((item) =>
  console.log(`Producto: ${item.nombre} - Precio: ${item.precio}€`)
);

// Ejercicio 5
const calculoTotal = (arr) => {
  let finalPrize = 0;
  arr.map((item) => (finalPrize += item.precio));
  return finalPrize.toFixed(2);
};

console.log(calculoTotal(lista) + "€");

// Ejercicio 6
const addProduct = (product) => {
  containsProduct(lista, product)
    ? console.log(`Producto existente: ${product.nombre}`)
    : lista.push(product);
};
const containsProduct = (lista, product) =>
  lista.find((item) => item.nombre === product.nombre);

addProduct({ nombre: "garbanzos", precio: 1.4 });

console.log(lista);
