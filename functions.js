// rest parameters
function sum (...numbers) {
  console.log(numbers)
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1,2,3))


// objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in.`
}

const user = {
  id: 5,
  name: 'Jim Jones'
}

console.log(loginUser(user));
console.log(loginUser({
  id: 3,
  name: 'Sarah'
}))


// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item)
}


const arrayOfPlaces = ['Beach', "Park", "School"]

getRandom(arrayOfPlaces)