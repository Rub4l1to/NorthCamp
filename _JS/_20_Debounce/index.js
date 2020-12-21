const greet = (saludo) => console.log(saludo);

// Recibe un intervalo, solo llama a la ultima llamada de ese intervalo.
const debounce = (func, time) => {
  let currentTimeOut;
  return function (...args) {
    if (currentTimeOut) clearTimeout(currentTimeOut);

    currentTimeOut = setTimeout(() => {
      func(args);
      currentTimeOut = undefined;
    }, time);
  };
};

// Recibe una función y te la devuelve debounceada:
const deboundGreet = debounce(greet, 1000);

deboundGreet("primera llamada");
deboundGreet("segunda llamada");
deboundGreet("tercera llamada");
deboundGreet("cuarta llamada");
setTimeout(() => deboundGreet("Que pasa chaval"), 800);