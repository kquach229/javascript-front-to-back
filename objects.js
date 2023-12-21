const person = {
  name: 'Jim',
  age: 25,
  address: '33 Beaver St'
}

// delete a property in object
delete person.address;
console.log(person)

// add property using bracket notation

person['career'] = 'IT';

console.log(person)


// add property using object notation
const todo = {};

todo.id = 1;


// Add method to object

person.greet = function (firstName) {
  console.log("Hello " + firstName )
}

// call method
person.greet("bill")

// create object literal
const newObj = new Object();
console.log(newObj)

// spread operator in objects
const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 4}

const obj3 = {...obj1, ...obj2};
console.log(obj3)

// the spread operator will take whatever is in the obj/arr and remove container brackets

// spread elements in array using Object.assign . It basically does the same as spread operator
const obj4 = Object.assign({}, obj1, obj2)

console.log(obj4)


const todos = {
  id: 1, name: 'Buy MIlk'
}

// get keys from obj and put into array
const keysFromTodosObj = Object.keys(todos)

console.log(keysFromTodosObj)

// get values from obj and put into array
const valuesFromObj = Object.values(todos);
console.log(valuesFromObj)

// get key value pairs from object and put into array
const keyValuePairsArray = Object.entries(todos);
console.log(keyValuePairsArray)

// check if object has a specific property
const hasNameProperty = todos.hasOwnProperty('name');
console.log(hasNameProperty)