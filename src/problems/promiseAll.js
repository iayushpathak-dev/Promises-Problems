// run multiple asynchronous operations in parallel, use Promise.all().
// Key point --> All promises run in parallel, and .then() fires when all are resolved.

export function promiseAll() {
  const fetchUser = new Promise((resolve) => {
    console.log("fetching users>>>>>>>>>>>>>>>");
    setTimeout(() => resolve("User Fetched"), 1000);
  });

  const fetchOrders = new Promise((resolve) => {
    console.log("fetching orders>>>>>>>>>>>>>>>");
    setTimeout(() => resolve("Orders Fetched"), 2000);
  });

  const fetchCart = new Promise((resolve) => {
    console.log("fetching cart>>>>>>>>>>>>>>>");
    setTimeout(() => resolve("Cart Fetched"), 1500);
  });

  Promise.all([fetchUser, fetchOrders, fetchCart])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => console.log(error));
}
