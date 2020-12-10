const rl = require("../config/readline");
const { initMessage, optionsMessage } = require("../functions/messages");
const options = require("./options");

const startGame = (data) => {
  initMessage();
  showOptions();
};

const showOptions = () => {
  console.log("¿Qué quieres hacer?")
  rl.question("continue | reset | stand up", (option) => {
    console.log(option.toLocaleLowerCase());
  });
};

module.exports = {
  startGame,
};
