
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
    try {
        if (transaction === null || transaction === undefined) {
            throw new Error("Null transaction");
        }

        if (transaction.id === undefined) {
            throw new Error("Missing transaction ID");
        }

        if (transaction.amount === undefined) {
            throw new Error("Missing amount");
        }

        if (typeof transaction.amount !== "number") {
            throw new Error("Amount must be a number");
        }

        if (transaction.amount < 0) {
            throw new Error("Negative amount");
        }

        validTransactions.push(transaction);
        console.log("Valid:", transaction);
    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            reason: error.message
        });
        console.log("Invalid:", error.message);
    }
}

console.log("\n===== Final Report =====");
console.log("Valid count:", validTransactions.length);
console.log("Invalid count:", invalidTransactions.length);
console.log("Invalid transactions:", invalidTransactions);
