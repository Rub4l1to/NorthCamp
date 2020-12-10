const getDeck = () => {
  let cards = [];
  ["H", "S", "D", "C"].forEach((letter) => {
    [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"].forEach((number) =>
      cards.push(`${number}-${letter}`)
    );
  });
  return cards;
};

module.exports = {
  getDeck,
  displayOptions,
};
