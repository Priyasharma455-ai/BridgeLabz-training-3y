// Assignment 5 - Passing a Callback as an Argument
// applyOperation applies the given callback to every number in the array.
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, number => number * 2);
const squaredNumbers = applyOperation(numbers, number => number * number);

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("Squared numbers:", squaredNumbers);
