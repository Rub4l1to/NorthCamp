let lista1 = [1, 2, 34, 20, 5, 11, 2, 4];
let lista2= ["hola",7,"que","tal",2,"adrian",56]
let lista3 = [1, -2, 34, -20, 5, 11, -2, 4];
let lista4 = [[1, 2], [34, 20, 5], [11], [2, 4]];

let map1 = lista1.reduce((acc, x) => acc - x, 0)
console.log(map1) // -79

let map2 = lista2.reduce((acc, x) => typeof x === 'string' ? acc + x : acc, "")
console.log(map2) //  holaquetaladrian

let map3 = lista3.reduce((acc, x) => x > 0 ? acc + x : acc, 0)
console.log(map3) //  55

let map4 = lista3.reduce((acc, x) => x > acc ? acc = x : acc, 0)
console.log(map4) //  34

let map5 = lista4.map(x => x.reduce((acc, x) => acc + x, 0));
console.log(map5) //  [3, 59, 11, 6]