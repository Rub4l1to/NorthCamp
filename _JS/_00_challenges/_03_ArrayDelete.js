/*
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 */

let array = [1, 2, 3, 4, 5];
const removeNumber = (n) => array.filter((item) => !n.includes(item));
console.log(removeNumber([1, 2, 3]));
