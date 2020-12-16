// // Ejercicio 1
// let n = 0;
// setInterval(() => console.log((n += 1)), 1000);

// Ejercicio 2
function ping() {
  setTimeout(() => {
    console.log("ping");
    ping();
  }, 500);
}
ping();

// Ejercicio 3
const setNode = (tag) => `<${tag}></${tag}>`;
console.log(setNode("div"));

// Ejercicio 4
setInterval(() => console.log(`${new Date().toLocaleTimeString()}`), 1000);
