// function getData(callback) {
//   setTimeout(() => {
//     callback(null, "Data fetched");
//   }, 1000);
// }  // alternate for this below using promises..

export function convertCallbackToPromise(miliseconds = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Fetched");
    }, miliseconds);
  });
}
