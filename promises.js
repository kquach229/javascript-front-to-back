const promise = new Promise((resolve, reject) => {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      resolve(data); // Resolving with the data fetched from the URL
    })
    .catch((error) => {
      reject(error); // Rejecting the Promise in case of an error
    });
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
