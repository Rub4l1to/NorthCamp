const showAlert = (msg, container) => (container.innerHTML = `<li>${msg}</li>`);

const clearDOM = (data) => data.map((item) => (item.innerHTML = ""));

// Pokemons consola
const drawJSON = (data, container) => {
  const { results } = data;
  results.map((item) => (container.innerHTML += `<p class="list__pokemons-name">${item.name}</p>`));
};

const searchPokemons = () => {
  clearDOM([document.querySelector("#msg"), document.querySelector(".list__pokemons")]);
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.status === 200 ? response.json() : 0)
    .then((data) => drawJSON(data, document.querySelector(".list__pokemons")))
    .catch((error) =>
      showAlert(
        `Hubo un problema con la petición : ${error.message}`,
        document.querySelector("#msg")
      )
    );
};


// Data pokemon
const searchDataPokemon = (e) => {
  e.preventDefault();
  let param = e.target.elements[0].value;
  clearDOM([document.querySelector("#msg"), document.querySelector("#abilities-data"), document.querySelector("#types-data")]);
  fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
    .then((response) => response.json())
    .then((data) => {
      data.abilities.map(item => document.querySelector("#abilities-data").innerHTML += `<p>${item.ability.name}</p>`)
      data.types.map(item => document.querySelector("#types-data").innerHTML += `<p>${item.type.name}</p>`)
    }).catch((e) =>
      showAlert(
        `No se han encontrado coincidencias con <strong>${param}</strong>`,
        document.querySelector("#data")
      )
    );
};


// Img Pokemon

const getFrontImg = (data) => [data.front_default, data.front_shiny];

const drawIMG = (data, container) =>
  data.map((item) => (container.innerHTML += `<img src=${item} alt=""/>`));

const searchPokemon = (e) => {
  e.preventDefault();
  let param = e.target.elements[0].value;
  clearDOM([document.querySelector("#msg"), document.querySelector("#img")]);
  fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
    .then((response) => response.json())
    .then((data) => getFrontImg(data.sprites))
    .then((images) => drawIMG(images, document.querySelector("#img")))
    .catch((e) =>
      showAlert(
        `No se han encontrado coincidencias con <strong>${param}</strong>`,
        document.querySelector("#msg")
      )
    );
};


// Events
document.querySelector("#search-img_Form").addEventListener("submit", searchPokemon);
document.querySelector("#search-data_Form").addEventListener("submit", searchDataPokemon);
document.querySelector("#pokemonsSubmit").onclick = searchPokemons;