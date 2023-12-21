// Arrays are a special type of 'object' and a data structure in JavaScript that stores multiple values
const numbers = [12,45,33,29,39];
// This is an array literal


// Array Contructor
const fruits = new Array("apple", 'grape', 'orange');
console.log(fruits[1])

// can change length of array
console.log(fruits)
fruits.length = 1;
console.log(fruits)

// add to end of array (length will always be one more than the last)
fruits[fruits.length] = "Guava";
console.log(fruits);

// array.slice doesn't change the original array
// returns [95,20]
let x;
const arr = [34,55, 95, 20, 15];
x = arr.slice(2,4);
console.log('slice:::::::', x)


// array.splice does change the original array
// returns 55,95,20
x = arr.splice(1,3)
console.log('splice:::::::', 'x:',x, 'arr:', arr) 

// nested arrays example
let y;
const veggies = ['apple', 'pear', 'tangerine'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

veggies.push(berries);

console.log('blueberry:', veggies[3][1])

// Flatten array
const arrOfNumbers = [1,2, [3,4], 5, [6, 7], 8 ];
const flattenedArray = arrOfNumbers.flat();
console.log(flattenedArray)

// pass values into array
const a = 1, b = 2, c = 3;
const arrayOfValues = Array.of(a,b,c);
console.log('arrayOfValues:', arrayOfValues)

// Pass items into array
const string = '123,456';
const arrayFromString = Array.from(string);
console.log('arrayFromString',arrayFromString)


// remove duplicate 5 in merged array
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

const mergedArray = [...arr1, ...arr2];
mergedArray.splice(4,1)
console.log("mergedArray::::::::", mergedArray)

// destructure arrays
// rest operator to grab rest of array
const numbersArray = [33,25,22,31];
const [first, second, ...rest] = numbersArray;
console.log(first, second);
console.log(first, second, rest);