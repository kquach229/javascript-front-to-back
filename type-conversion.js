let amount = '100';
console.log(amount, typeof amount);
// string

// convert to numbers (method 1)
const numberedAmount = parseInt(amount);
console.log('numberedAmount::::::', numberedAmount, typeof numberedAmount);

// convert to numbers (method 2)
const numberedAmount2 = +amount;
console.log('numberedAmount2:::::', numberedAmount2, typeof numberedAmount2);

// convert to numbers (Method 3)
const numberedAmount3 = Number(amount);
console.log('numberedAmount3:::::::::', numberedAmount3, typeof numberedAmount3);



// Chnage number to string
let figure = 300;
const stringAmountConverted = figure.toString();
console.log('stringAmount:::::::',stringAmountConverted, typeof stringAmountConverted)

// method 2
console.log(String(figure));


// Change float to number
const float = '32.5';
console.log(parseFloat(float));

// Convert number to boolean
const amountOfDogs = 1;
console.log(Boolean(amount));

const amountOfCats = 0;
console.log(Boolean(amountOfCats));


// NaN
const greeting = 'hello';
console.log(parseInt(greeting), typeof(parseInt(greeting)));


