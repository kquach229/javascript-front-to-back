// // What is the DOM
// // programming interface for web/html elements
// // structure that we can intereact with via JavaScript
// // Includes tags, attributes, text nodes, etc
// // represented as a tree structure

// // get properties/methods of document
// console.dir(document)

// // get html in body
// console.log(document.body.innerHTML)

// // get text in body
// console.log(document.body.innerText)

// // manipulate body innerHtml
// document.body.innerHTML = '<h5>Hello Assignment</h5>';

// // write directly to dom
// document.write("hello from js")

// get element by id
// console.log(document.getElementById('main'))
// const main = document.getElementById('main');
// main.innerHTML = '<h3>Sup</h3>'

// query selector
// document.querySelector("#main h3").innerText = "Sup bro";

// set new attributes
// const newId = document.getElementById("main").id = 'new-id';
// console.log(newId, document.getElementById('new-id'))

// set attribute method
// document.getElementById('new-id').setAttribute('class', 'newClass');
// console.log(document.body.innerHTML)

// get user input, log to console on click, and display in title
// let username;
// document.getElementById('myButton').onclick = function() {
//   username = document.getElementById('myText').value;
//   document.getElementById('myLabel').innerHTML = username;
//   console.log(username)
// }


// make form come to life
// document.getElementById("submitButton").onclick = function() {
// let a;
// let b;
// let c;

// a = document.getElementById("aTextBox").value;
// a = Number(a);

// b = document.getElementById('bTextBox').value;
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//   document.getElementById('cLabel').innerText = c;
// }