const throwDice = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.ceil(Math.random() * 5) + 1);
        }, 1000);
    });

const getPlayerScore = async () => {
    let n1 = await throwDice();
    let n2 = await throwDice();
    return [n1, n2];
};

const startGame = async (players) => {
    let results = [];
    for (let i = 1; i <= players; i++) {
        results.push(await getPlayerScore());
    }
    console.log(results)
};


startGame(2)