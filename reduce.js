// get sum of all numbers in array

const numbers = [1,2,3,4,5,6,7,8,9,10];

const summed = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0)

console.log(summed)


// example 2

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 175 },
];

const summedCartPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

console.log(summedCartPrice)

// Add all the positive numbers in the array
const numbersArrayExample = [2,-30, 50, 20, -12, -9, 7];
const addedNumbers = numbersArrayExample
  .filter(num => num >= 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(addedNumbers);
