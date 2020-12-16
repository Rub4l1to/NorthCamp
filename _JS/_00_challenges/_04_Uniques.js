/*
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 */

const arraySim = (array) => {
  let data = new Set(array);
  return [...data];
};

console.log(arraySim([1, 2, 3, 4, 5, 4, 2]));
