let array = ["lorem", "foo", "bar", "ipcum", "cocq"];
console.log(array.filter((x) => x.length > 3));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.filter((x) => x % 2 !== 0));

let objects = [
  { name: "lorem", important: true },
  { name: "ipsum", important: true },
  { name: "covid-19", important: false },
];
console.log(objects.filter((x) => x.important));
