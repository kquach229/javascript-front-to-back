// Primitive Types(String | Boolean | Number | Null | Undefined | Symbol | Bigint)
// Stored directly in the 'stack', where it is accessed from


// Reference Types(Arrays|Functions|Objects)
// Stored in the heap and accessed by reference

let name = "John";
let age = 30;

let person = {
  name: 'Brad',
  age: 40
}

let newName = name;
// newName is equal to "John"
console.log('newName::::::', newName);


newName = "Johnathan";
// newName is now equal to Johnathan. Name is still John
console.log('newName:::::', newName, "name:::::", name);



let newPerson  = person;
// newPerson is equal to { name: "Brad", age: 40 };
console.log("newPerson:::::::", newPerson);


newPerson.name = "Bradley";
// person.name is also now "Bradley" since the reference is the same
console.log('person',person)