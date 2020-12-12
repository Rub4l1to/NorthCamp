export const templateCard = ({ name, status, species, image }) => {
  let circle =
    status.toLowerCase() === "alive"
      ? "card__circle card__circle--active"
      : "card__circle";
      console.log(circle)

  document.querySelector("#list").innerHTML += `
    <div class="card">
    <a class="card__link" href="#">
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
      </div>
    </a>
  </div>
    `;
};

export const templateModal = () => {
  // <section class="modal">
  //   <article class="modal__window">
  //     <figure class="modal__img-container">
  //       <img class="modal__photo" src="/img/ricksanchez.jpg" alt="" />
  //     </figure>
  //     <div class="modal__data">
  //       <figure class="modal__close">
  //         <img class="modal__symbol" src="/img/times-solid.svg" alt="">
  //       </figure>
  //       <div class="modal__bibliography">
  //         <p class="modal__title">Rick Sánchez</p>
  //         <div class="modal__status">
  //           <span class="modal__circle modal__circle--active"></span>
  //           <p class="modal__status-info">
  //             <span class="modal__status-state">Alive</span> -
  //             <span class="modal__status-race">Alien</span>
  //           </p>
  //         </div>
  //         <div class="dimensions modal__gender">
  //           <p class=" modal__gender-title">Gender</p>
  //           <p class="dimensions-text modal__gender-text">Male</p>
  //         </div>
  //         <div class="dimensions modal__origin">
  //           <p class=" modal__origin-title">Origin</p>
  //           <p class="dimensions-text modal__origin-text">Earth</p>
  //         </div>
  //         <div class="dimensions modal__location">
  //           <p class="modal__location-title">Last know location:</p>
  //           <p class="dimensions-text modal__location-text">Earth</p>
  //         </div>
  //       </div>
  //     </div>
  //   </article>
  // </section>
};
