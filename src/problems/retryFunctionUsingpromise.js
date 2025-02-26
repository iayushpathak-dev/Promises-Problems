// write a function retry(fn, retries) that retries a promise-based function up to retries times if it fails.

function retry(fn, retries) {
  return fn().catch((err) => {
    if (retries > 0) {
      console.log(`Retrying... Attempts left: ${retries}`);
      return retry(fn, retries - 1);
    } else {
      throw err;
    }
  });
}

let counter = 0;
const functionCallingMaxCount = 3;

function fetchData() {
  return new Promise((resolve, reject) => {
    counter++;
    if (counter < functionCallingMaxCount) {
      reject("Failed!");
    } else {
      resolve("Success!");
    }
  });
}

retry(fetchData, functionCallingMaxCount)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
