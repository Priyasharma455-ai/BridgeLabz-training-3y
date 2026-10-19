
"use strict";

function showMessage() {
    try {
        greeting = "Welcome";
        console.log(greeting);
    } catch (error) {
        console.log("Error:", error.name);
        console.log(error.message);
    }
}

showMessage();

// Corrected version: declare the variable
function showCorrectMessage() {
    const greeting = "Welcome";
    console.log("Fixed output:", greeting);
}

showCorrectMessage();
