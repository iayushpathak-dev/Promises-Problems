import readline from "readline";
import { runProblem } from "./RunProblem.js";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const customReadLine = ({}) => {
  rl.question("Enter the problem name):", (answer) => {
    runProblem(answer);
  });
};
