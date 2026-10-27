// Assignment 5 - Closure
function makeMultiplier(multiplier) {
    // The returned function remembers the multiplier from its outer scope.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure means the inner function can still access 'multiplier'
// even after makeMultiplier has finished running.
