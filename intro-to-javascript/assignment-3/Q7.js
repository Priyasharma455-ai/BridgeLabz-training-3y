
"use strict";

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

const num1 = 25;
const num2 = 0;

const operations = ["add", "divide", "power", "root", "subtract"];

for (const operation of operations) {
    try {
        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero");
                }
                result = num1 / num2;
                break;

            case "power":
                result = num1 ** num2;
                break;

            case "root":
                if (num1 < 0) {
                    throw new Error("Cannot find square root of a negative number");
                }
                result = Math.sqrt(num1);
                break;

            case "subtract":
                result = num1 - num2;
                break;

            default:
                throw new InvalidOperationError(operation);
        }

        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation} error: ${error.message}`);
    }
}

// Test an invalid operation
try {
    throw new InvalidOperationError("multiply");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
