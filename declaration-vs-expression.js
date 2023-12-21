// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("say hi")
})();

(function(l,w) {
  console.log(l * w)
} )(5, 3)


// function declaration (declared with keyword function)
// function declaration gets hoisted, which allows it to be invoked before declaring

console.log(addDollarSign(5))

function addDollarSign(value) {
  return '$' + value;
}

// function expression
const addPlusSign = function(value) {
  return '+' + value
}

console.log(addPlusSign(5))



const numbers = [15,30, 45, 60]
const doubledNumbers = [];
numbers.forEach(function (num) {
  doubledNumbers.push(num * 2)
})

console.log(doubledNumbers)