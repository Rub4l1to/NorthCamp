export const filterBySearch = (arr, value) =>
  arr.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));

export const filterByStock = (arr, checked) =>
  arr.filter(({ stocked }) => (checked ? stocked : true));

export const getUniqueCategory = (index, category, arr) =>
  !index || category !== arr[index - 1].category;

export const pipeWithArgs = (...fns) => (value, ...args) =>
  fns.reduce((computed, fn, index) => fn(computed, args[index]), value);
