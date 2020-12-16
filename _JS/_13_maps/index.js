let lista1 = [8, 12, 20];
let lista2 = [1, 7, 50];
let lista3 = [-2, 5, 15, -7, -8];
let lista4 = [{ name: 'Alberto' }, { name: 'Fran' }];
let lista5 = ['lorem ipsum dolor', 'hello world'];

let map1 = lista1.map(x => x / 2);
console.log(map1) // [4, 6, 10]

let map2 = lista2.map(x => `${x}`);
console.log(map2) // [“1”, “7”, “50”]

let map3 = lista3.map(x => x > 0 ? "+" : "-");
console.log(map3) //  [“-”, “+”, “+”, “-”, “-”]

let map4 = lista4.map(x => x.name);
console.log(map4) //  [“Alberto”, ”Fran”]

let map5 = lista5.map(x => x.split(" ")
                 .map(i => i.charAt(0))
                 .join(""));
console.log(map5) //  [“lid”, “hw”]
