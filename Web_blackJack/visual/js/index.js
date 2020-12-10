const main = () => {
  toggleModal(document.querySelector(".modal"));
  initGame();
};

const initGame = () => {
  deck = getDeck();
  // Primera accion
  sendTimeOut(addCardToPlayerHand, addCardToDealerHand, addCardToPlayerHand);

  // Preguntamos 
  setTimeout(() => {
    showMessage("¿Qué desea hacer?");
    showMessage(" HIT | STAND");
  }, 900);

};

const sendTimeOut = (...func) => func.map(item => setTimeout(() => item(), 800));


// Remove modal
const toggleModal = (container) => {
  container.style.display === "none"
    ? (container.style.display = "flex")
    : (container.style.display = "none");
};

// Show final modal
const showFinalModal = (message) => {
  document.querySelector(".modal").style.display = "flex";
  document.querySelector(".modal-window").style.display = "none";
  document.querySelector("#finalMessage").innerHTML = message;
  document.querySelector(".modal-final").style.display = "flex";
};

// Crear el deck
const getDeck = () => {
  let cards = [];
  ["H", "S", "D", "C"].forEach((letter) => {
    [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"].forEach((number) =>
      cards.push(`${number}${letter}`)
    );
  });
  return cards;
};

// Get card
const getCard = () => {
  let card = getRandomCard();
  removeCard(card);
  return card;
};

// Get card value
const getCardValue = (card) => {
  let number = card.split("")[0];
  if (number === "J" || number === "Q" || number === "K") return 10;
  if (number === "A") return 1;
  return parseInt(number);
};

// Reduce
const getHandValue = (data) =>
  data.reduce((acc, item) => acc + getCardValue(item), 0);

// Sacar tarjeta
const getRandomCard = () => deck[Math.floor(Math.random() * deck.length)];

// Remove cards
const removeCard = (card) => (deck = deck.filter((item) => item !== card));

// Agregar carta a la mano del jugador
const addCardToPlayerHand = () =>
  setCards(
    document.querySelector(".subcontainerClient-hand"),
    getCard(),
    playerHand
  );

// Agregar carta a la mano del dealer
const addCardToDealerHand = () =>
  setCards(
    document.querySelector(".subcontainerDealer-hand"),
    getCard(),
    dealerHand
  );

// Cargamos el numero de cartas que tiene la mano
const getHandLength = (container) =>
  container.querySelectorAll(".card").length + 1;

// Creamos el nodo de la carta
const setCards = (container, card, hand) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  div.setAttribute("class", `card animated fadeIn card${getHandLength(container)}`);

  img.setAttribute("src", `./assets/cards/${card}.png`);
  div.appendChild(img);
  if (getHandLength(container) < 4) {
    hand.push(card);
    container.appendChild(div);
  }
};

// Acciones
const checkAction = (action) => {
  let selected = action.target.getAttribute("id");
  if (selected === "hit") {
    sendTimeOut(addCardToPlayerHand, addCardToDealerHand, addCardToDealerHand);
  };
  if (selected === "stand") {
    sendTimeOut(addCardToDealerHand, addCardToDealerHand);
  }
  continueGame();
  // if (selected === "split") console.log(playerHand);
};

const continueGame = () =>{
  setTimeout(() => {
    showMessage("¿Quieres jugar otra vez?");
  
  }, 500);
  setTimeout(() => {
    getWinner(playerHand, dealerHand)
  }, 1500)
}

// Messages
const showMessage = (message) => createMessage(message, getDate());

const createMessage = (message, date) => {
  let messageDiv = document.createElement("div");
  let dateP = document.createElement("p");
  let subcontainerDiv = document.createElement("div");
  let iconP = document.createElement("p");
  let textP = document.createElement("p");

  messageDiv.setAttribute("class", "message fadeIn animated");
  dateP.setAttribute("class", "date-message");
  subcontainerDiv.setAttribute("class", "subcontainer-message");
  iconP.setAttribute("class", "icon-message");
  textP.setAttribute("class", "text-message");

  dateP.innerHTML = date;
  iconP.innerHTML = "I";
  textP.innerHTML = message;

  subcontainerDiv.appendChild(iconP);
  subcontainerDiv.appendChild(textP);
  messageDiv.appendChild(dateP);
  messageDiv.appendChild(subcontainerDiv);

  document.querySelector("#messages").appendChild(messageDiv);
  // clearMessages(messageDiv);
};

// Clear message
const removeChildsContainer = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  };
}

// Date
const getDate = () =>
  `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;

// Get winner
const getWinner = (player, dealer) => {
  let dealerHand = getHandValue(dealer);
  let playerHand = getHandValue(player);

  if (dealerHand > 21) showFinalModal("Gana el player");
  else if (playerHand > 21) showFinalModal("Gana el dealer");
  else
    dealerHand > playerHand
      ? showFinalModal("Gana el dealer")
      : showFinalModal("Gana el player");
};

// Reset
const reset = () => {
  deck = [];
  playerHand = [];
  dealerHand = [];
  removeChildsContainer(document.querySelector(".subcontainerDealer-hand"));
  removeChildsContainer(document.querySelector(".subcontainerClient-hand"));
  removeChildsContainer(document.querySelector("#messages"))
  toggleModal(document.querySelector(".modal-window"));
  toggleModal(document.querySelector(".modal-final"));
};

// Audios
// Background Audio
const playAudio = () => {
  let newAudio = new Audio('../assets/audio/backgroundAudio.mp3').play();
    newAudio.volume = 0.01;
};

// Initialition
let deck = [];
let playerHand = [];
let dealerHand = [];

window.onload = () => playAudio();
document.querySelector("#modal-button-start").addEventListener("click", main);
document.querySelector("#modal-button-reset").addEventListener("click", reset);
document.querySelector("#hit").addEventListener("click", checkAction);
document.querySelector("#stand").addEventListener("click", checkAction);
