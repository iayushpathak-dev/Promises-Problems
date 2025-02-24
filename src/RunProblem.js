import { convertCallbackToPromise } from "./problems/convertCallbackToPromise.js";
import delayFunctionUsingPromise from "./problems/delayFunctionUsingPromise.js";
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

    default:
      console.log("Invalid problem type");
  }
  rl.close();
};
