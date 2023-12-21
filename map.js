// take people array and create array called youngPeople that stores object
// with only name and email properties of people aged 25 and under
// the name property should have their first and last name
const people = [
  {firstName: 'John', lastName: 'Doe', email: 'john@gmail.com', phone: '111-111-1111',  age: 30},
  {firstName: 'Jane', lastName: 'Poe', email: 'janen@gmail.com', phone: '222-222-2222', age: 25},
  {firstName: 'Bob', lastName: 'Foe', email: 'bob@gmail.com', phone: '333-333-3333', age: 45},
  {firstName: 'Sara', lastName: 'Doe', email: 'sarah@gmail.com', phone: '444-444-4444', age: 19},
  {firstName: 'Jose', lastName: 'Koe', email: 'jose@gmail.com', phone: '555-555-5555', age: 23},
]

const youngPeople = 
  people.filter(person => person.age <= 25)
  .map(person => {
    return {
      name: person.firstName + ' ' + person.lastName,
      email: person.email
    }
  });

  console.log(youngPeople);

// capitalize first letters of all words in array
const words = ['coder', 'programmer', 'developer'];

const cWords = words.map(word => word[0].toUpperCase() + word.slice(1));
console.log(cWords);