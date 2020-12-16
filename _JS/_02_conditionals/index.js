// Firts step
let o = 10;
const comparation = (r) => (r <= 10 ? r * 2 : r / 2);
console.log(comparation(o));

// Second step
let n1 = 100;
const motor = (i) => {
  if (i === 0) return "El motor esta apagado";
  else if (i === 100) return "El motor esta a máxima potencia";
  else return `El motor esta a potencia media - ${i} `;
};
console.log(motor(n1));

// Third step
let activo = true;
let n2 = 2;

const active = (a, n) => {
  if (a) {
    if (n === 1) return "Hello word";
    else if (n === 2) return "Hello word \nHello word";
  } else return "El programa no esta activo";
};

console.log(active(activo, n2));
