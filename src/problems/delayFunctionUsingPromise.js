export default function delayFunctionUsingPromise(miliseconds = 2000) {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved("promise solved as per delay time...");
    }, miliseconds);
  });
}
