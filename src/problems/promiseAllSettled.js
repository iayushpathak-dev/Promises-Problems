// Promise.allSettled() to Check Status of Each
// If you want to track both successful and failed promises, Promise.allSettled() gives real-time status

export function promiseAllSettled(functionArray) {
  Promise.allSettled(functionArray)
    .then((results) => {
      results.forEach((result, index) => {
        console.log(`Promise ${index + 1}:`, result);
      });
    })
    .catch((error) => console.log(error));
}
