
"use strict";

// Strict mode does not allow undeclared variables.
function strictDemo(a, b) {
    try {
        total = 10;
        console.log(total);
    } catch (error) {
        console.log("Strict mode error:", error.name);
    }
}

strictDemo(5, 10);

// Corrected version
function correctedDemo(a, b) {
    const total = a + b;
    console.log("Correct total:", total);
}

correctedDemo(5, 10);

// Duplicate parameters are allowed in this
// non-strict function created using Function().
const nonStrictDemo = Function(
    "a",
    "a",
    "return a;"
);

console.log(
    "Non-strict duplicate parameter result:",
    nonStrictDemo(5, 10)
);
