import { testPromises } from "./problems/commonPromises.js";
import { convertCallbackToPromise } from "./problems/convertCallbackToPromise.js";
import delayFunctionUsingPromise from "./problems/delayFunctionUsingPromise.js";
import { promiseAll } from "./problems/promiseAll.js";
import { promiseAllSettled } from "./problems/promiseAllSettled.js";
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
      break;

    case "Promise.all":
      promiseAll(testPromises);
      break;

    case "Promise.allSettled":
      promiseAllSettled(testPromises);
      break;

    default:
      console.log("Invalid problem type");
  }
  rl.close();
};
