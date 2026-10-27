// Q2: Demonstrate synchronous code, Promise microtasks, and setTimeout macrotasks.
console.log("Start");
setTimeout(() => console.log("setTimeout callback (macrotask)"), 0);
Promise.resolve().then(() => console.log("Promise callback (microtask)"));
console.log("Synchronous log");
console.log("End");
// Synchronous statements run first. Once the call stack is empty, Promise
// microtasks run before setTimeout callbacks (macrotasks).
