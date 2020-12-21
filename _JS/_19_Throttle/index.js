const greet = (saludo) => console.log(saludo);

// Recibe un intervalo, solo se puede llamar 1 vez dentro de ese intervalo, cualquier llamada la ignora.
const throttle = (func, time) => {
  let enabled = true;
  return function (...arg) {
    if (enabled) func(...arg);
    enabled = false;
    setTimeout(() => enabled = true, time);
  };
};

// Recibe una función y te la devuelve throttlizada:
const throttleGreet = throttle(greet, 800);

// Solo tendra en cuenta la primera llamada dentro del tiempo de 800 milesegundos
throttleGreet("hola");
throttleGreet("holi");
throttleGreet("holita");
setTimeout(() => throttleGreet("Que pasa chaval"), 1000);