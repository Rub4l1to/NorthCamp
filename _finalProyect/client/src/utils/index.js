export const newFavStorage = (e) => {
  let allMovies = JSON.parse(localStorage.getItem("favsFilms")) || [];
  if (!allMovies.filter((movie) => movie.data.id === e.data.id).length) {
    allMovies.push(e);
    localStorage.setItem("favsFilms", JSON.stringify(allMovies));
    alert("Has agregado la pelicula a favoritos");
  } else alert("¡Ya has agregado esta pelicula a favoritos!");
};

export const loadFavs = async (_) =>
  (await (localStorage.getItem("favsFilms") === undefined))
    ? []
    : localStorage.getItem("favsFilms");

export const deleteFavFilm = async (e) =>
  loadFavs()
    .then((res) => JSON.parse(res).filter(({ data }) => data.id !== e.data.id))
    .then((res) => localStorage.setItem("favsFilms", JSON.stringify(res)));

export const favsExist = async(_) =>
  !localStorage.getItem("favsFilms") &&
  localStorage.setItem("favsFilms", JSON.stringify([]));
