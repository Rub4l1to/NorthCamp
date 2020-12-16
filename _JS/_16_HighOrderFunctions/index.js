const repeatFunc = (n, func) => {
  for (let step = 0; step < n; step++) {
    func();
  }
};
const sayHi = () => console.log("Hola");

repeatFunc(3, sayHi);

// My map
const map = (lista, func) => {
  let newNumbers = [];
  lista.forEach((element) => newNumbers.push(func(element)));
  console.log(newNumbers);
};

map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => x + 1);

// My filter
const filter = (lista, func) => {
  let newNumbers = [];
  lista.forEach((element) =>
    func(element) ? newNumbers.push(element) : newNumbers
  );
  console.log(newNumbers);
};

filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => x % 2 === 0);

// My Reduce
const reduce = (lista, func, initial) => {
  let output = initial;
  lista.forEach((element) => (output = func(element, output)));
  console.log(output);
};

reduce(
  ["hola", "adrian", 1],
  (x, acc) => (typeof x === "string" ? acc + x : acc),
  ""
);

// Map & Filter with reduce

const mapReduce = (l, f, i) =>
  l.reduce((acc, element) => [...acc, f(element)], i);

const mapFilter = (l, f, i) =>
  l.reduce((acc, element) => (f(element) ? [...acc, element] : acc), i);

console.log(mapReduce([1, 2, 3], (x) => x + 1, []));
console.log(mapFilter([1, 2, 3, 4, 5, 6], (x) => x > 2, []));
