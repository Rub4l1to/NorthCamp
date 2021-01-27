const throwDice = (callback) =>
  setTimeout(() => callback(Math.ceil(Math.random() * 5) + 1), 1000);

const getPlayerScore = (data) => {
  throwDice((num1) => {
    throwDice((num2) => {
      data([num1, num2]);
    });
  });
};

getPlayerScore((result) =>
    getPlayerScore((result2) => {
        getPlayerScore((result3) => {
            console.log([result, result2, result3])
        })
    })
);

const startGame = (players) => {
  let promises = [];
  for (let i = 1; i <= players; i++) {
    getPlayerScore((result) => {
      promises.push(result);
      if (promises.length == players) {
        Promise.all(promises).then((values) => {
          console.log(values);
        });
      }
    });
  }
};

startGame(6);
