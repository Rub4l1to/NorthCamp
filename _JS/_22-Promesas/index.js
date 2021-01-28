const throwDice = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.ceil(Math.random() * 5) + 1);
    }, 1000);
  });

const getPlayerScore = () =>
  new Promise((resolve, reject) => {
    throwDice()
      .then((res) => res)
      .then((dice1) => 
        throwDice()
            .then((dice2) => 
                resolve([dice1, dice2])));
  });

const startGame = (players, callback) => {
  let promises = [];
  for (let i = 1; i <= players; i++) {
    getPlayerScore()
      .then((res) => { promises.push(res); })
      .then(() => { if (promises.length == players) callback(promises) });
  }
};

startGame(3, (data) => console.log(data));
