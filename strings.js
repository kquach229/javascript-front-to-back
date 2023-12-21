const myString = "developer";

const upperCasedLetter = myString.substring(0,1).toUpperCase();

const lowerCasedLetters = myString.slice(1);

const combinedWord = upperCasedLetter + lowerCasedLetters;

console.log(combinedWord)