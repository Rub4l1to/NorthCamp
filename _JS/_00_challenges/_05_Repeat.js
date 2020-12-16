// Crea una función que reciba una lista y un número
// La función tiene que devolver una lista de listas, donde la longitud de cada lista es igual al número
// blocks([1, 1, 1, 1, 1, 1], 2)  ---> [[1, 1], [1, 1], [1, 1]]
// blocks([1, 1, 1, 1, 1], 3)  ---> [[1, 1, 1], [1, 1]]

const listSeparator = (list, number) => {
  let data = [],
    array = [];
  list.forEach((element, index) => {
    array.push(element);
    if (index === list.length - 1 || array.length === number) {
      data.push(array);
      array = [];
    }
  });
  console.log(data);
};

listSeparator([1, 1, 1, 1, 1], 3);
