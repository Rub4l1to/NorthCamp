import {removeModal } from './generic';

// Card template
export const templateCard = ({ name, status, species, image, gender, origin, location }) => {
  let circle =
    status.toLowerCase() === "alive"
      ? "card__circle card__circle--active"
      : "card__circle";

  let card = document.createElement("div");
  card.className = "card";

  let link = document.createElement("a");
  link.className = "card__link";
  link.addEventListener("click", () =>
    showModal(name, status, species, image, gender, origin, location)
  );

  let info = `
      <figure class="card__img-container">
        <img class="card__photo" src="${image}" alt="" />
      </figure>
      <div class="card__info">
        <p class="card__title">${name}</p>
        <div class="card__body">
          <span class="${circle}"></span>
          <p class="card__status">
            <span class="card__status-state">${status}</span> -
            <span class="card__status-race">${species}</span>
          </p>
        </div>
      </div>`;

  link.innerHTML = info;
  card.append(link);
  document.querySelector("#list").appendChild(card);
};

// Show modal
export const showModal = ( name, status, species, image, gender, origin, location ) => {
  let circle =
    status.toLowerCase() === "alive"
      ? "modal__circle modal__circle--active"
      : "modal__circle";

  let modal = document.createElement("div");
  modal.className = "modal";

  let window = document.createElement("div");
  window.className = "modal__window";

  // Info del modal
  // Imagen principal
  let imagen = document.createElement("figure");
  imagen.className = "modal__img-container";
  imagen.innerHTML = `<img class="modal__photo" src="${image}" alt="" />`;
  window.append(imagen);

  // Datos del modal
  let modalData = document.createElement("div");
  modalData.className = "modal__data";

  // Simbolo cruz
  let cross = document.createElement("div");
  cross.className = "modal__close";
  cross.innerHTML = `<img class="modal__symbol" src="/img/times-solid.svg" alt="">`;
  cross.addEventListener("click", () => removeModal());

  let info = `
  <div class="modal__bibliography">
    <p class="modal__title">${name}</p>
    <div class="modal__status">
      <span class="${circle}"></span>
      <p class="modal__status-info">
        <span class="modal__status-state">${status}</span> -
        <span class="modal__status-race">${species}</span>
      </p>
    </div>
    <div class="dimensions modal__gender">
      <p class=" modal__gender-title">Gender</p>
      <p class="dimensions-text modal__gender-text">${gender}</p>
    </div>
    <div class="dimensions modal__origin">
      <p class=" modal__origin-title">Origin</p>
      <p class="dimensions-text modal__origin-text">${origin.name}</p>
    </div>
    <div class="dimensions modal__location">
      <p class="modal__location-title">Last know location:</p>
      <p class="dimensions-text modal__location-text">${location.name}</p>
    </div>
  </div> `;

  modalData.innerHTML += info;
  modalData.append(cross);
  window.append(modalData);
  modal.append(window);
  document.body.append(modal);
};
