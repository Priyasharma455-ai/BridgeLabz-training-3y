
// Store the given number
let x = 16.75;

// Calculate mathematical values
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);

// Generate a random number between 10 and 50
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted result using template literals
console.log(`Original Number: ${x}`);
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot}`);
console.log(`Power (x^3): ${powerValue}`);
console.log(`Random Number (10-50): ${randomNumber}`);

console.log(`
----- Math Utility Summary -----
Number: ${x}
Rounded: ${roundedValue}
Square Root: ${squareRoot}
Power (x^3): ${powerValue}
Random Number: ${randomNumber}
`);
