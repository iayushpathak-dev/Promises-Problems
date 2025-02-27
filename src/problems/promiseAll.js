// run multiple asynchronous operations in parallel, use Promise.all().
// Key point --> All promises run in parallel, and .then() fires when all are resolved.

export function promiseAll(functionArray) {
  Promise.all(functionArray)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => console.log(error));
}
