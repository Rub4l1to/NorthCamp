const throwDice = (callback) =>
  setTimeout(() => callback(Math.ceil(Math.random() * 5) + 1), 1000);

const getPlayerScore = (data) => {
    throwDice((num1) => {
        throwDice((num2) => {
            data([num1,num2])
        })
    })
};

getPlayerScore((data) => console.log(data));
