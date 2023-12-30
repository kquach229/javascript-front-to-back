// callbacks

function sayOne() {
  console.log('say one');
}

function sayTwo(callback) {
  setTimeout(() => {
    console.log(callback());
  }, 2000);
  console.log('say two');
}

function sayThree() {
  console.log('say three');
}

sayOne();
sayTwo(sayThree);
