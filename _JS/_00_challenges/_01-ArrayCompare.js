/*
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */

const compare = (e, a) => JSON.stringify(e) === JSON.stringify(a);

console.log(compare([1], [1]));
