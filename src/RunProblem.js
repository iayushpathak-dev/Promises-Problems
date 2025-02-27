import { convertCallbackToPromise } from "./problems/convertCallbackToPromise.js";
import delayFunctionUsingPromise from "./problems/delayFunctionUsingPromise.js";
import { promiseAll } from "./problems/promiseAll.js";
import { fetchData, retry } from "./problems/retryFunctionUsingpromise.js";
import { rl } from "./ReadLine.js";

export const runProblem = (problemType) => {
  switch (problemType) {
    case "delayFunctionUsingPromise":
      delayFunctionUsingPromise(2000).then(() =>
        console.log("Executed after 2 seconds")
      );
      break;

    case "convertCallbackToPromise":
      convertCallbackToPromise(2000).then(() =>
        console.log("excuted after miliseconds")
      );
      break;

    case "retry":
      retry(fetchData, 3)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));

    case "Promise.all":
      promiseAll();

    default:
      console.log("Invalid problem type");
  }
  rl.close();
};
