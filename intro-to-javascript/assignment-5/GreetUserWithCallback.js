// Assignment 5 - Callback Function
// greetUser prints a greeting and then calls the callback function.
function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

// Demonstrate the callback flow.
greetUser("Priya", showEndMessage);
