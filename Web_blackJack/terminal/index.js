
const { getDeck, displayOptions } = require("./functions");
const { startGame } = require("./functions/execution");

const options = require("./functions/options");
const { hit, reset, standUp } = require("./functions/options");

// Ejecucion
startGame();

/*
rl.question("¿Qué quieres hacer? ", (name) => {
  console.log(name);
});
console.log(getDeck());
rl.on("open", () => {process.exit(0);});
*/
