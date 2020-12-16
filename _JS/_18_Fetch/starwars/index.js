const searchData = () => {
  fetch(`https://swapi.dev/api/people/`)
    .then((response) => response.json())
    .then((data) => getPeople(data.results, 5))
    .then((peopleSelected) => {
      drawPeople(peopleSelected, document.querySelector("#root"));
      drawAverage(
        averageHeight(peopleSelected).toFixed(2),
        document.querySelector("#avrgHeigth")
      );
    })
    .catch((e) => console.log(e.msg));
};

const getPeople = (data, num) =>
  data.reduce((acc, x) => (acc.length != num ? [...acc, x] : acc), []);

const averageHeight = (data) =>
  data.reduce(
    (acc, x) =>
      acc <= data.length ? acc + parseInt(x.height) : (acc /= data.length),
    0
  );

const drawPeople = (data, container) =>
  data.map((item) => (container.innerHTML += `<p>${item.name}</p>`));

const drawAverage = (data, container) =>
  (container.innerHTML = `<p>${data} cm</p>`);

// Events
window.onload = () => {
  searchData();
  // Actualizarlo en casa : Separar la peticion por cada persona y lidiar con la asincronia. Usar una promesa que espere el dato.
  // getFirtsPerson();
  // getSecondPerson();
  // getSecondPerson();
};
