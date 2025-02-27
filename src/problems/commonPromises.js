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

export const testPromises = [fetchUser, fetchOrders, fetchCart];
