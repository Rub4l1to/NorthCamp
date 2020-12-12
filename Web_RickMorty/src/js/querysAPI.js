export const getCharactersPage1 = () =>
  fetch("https://rickandmortyapi.com/api/character/?page=1")
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((e) => e);

export const getCharactersPage2 = () =>
  fetch("https://rickandmortyapi.com/api/character/?page=2")
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((e) => e);

export const getCharactersPage3 = () =>
  fetch("https://rickandmortyapi.com/api/character/?page=3")
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((e) => e);

    // async serial(){
    //     queryResult1 = await client.query('SELECT * FROM books where book_id = $1', ['bookid']);
    //     queryResult2 = await client.query('SELECT * FROM username where username = $2',['username']);
    //     queryResult3 = await client.query('SELECT * FROM saved where saved_id = $3',['saved_id']);
    //     console.log(queryResult1);
    //     console.log(queryResult2);
    //     console.log(queryResult3);
    // }