// Q9 predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback
// Synchronous logs execute first. Promise microtasks run after the current
// call stack and before setTimeout macrotasks.
console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");
