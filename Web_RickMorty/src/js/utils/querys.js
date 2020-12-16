// Recogemos los datos que tiene cada pagina
export const getCharactersPage = (page) =>
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => response.json())
    .then((res) => res.results)
    .catch((e) => e);
