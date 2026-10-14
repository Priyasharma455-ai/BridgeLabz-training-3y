// Initialize the counter
let count = 0;

// Function to increment the counter
function increment() {
    count++;
    console.log("Count after increment:", count);

    // Nested function to display the current count
    function showCount() {
        console.log("Current count inside nested function:", count);
    }

    showCount();
}

// Function to decrement the counter
function decrement() {
    count--;
    console.log("Count after decrement:", count);
}

// Simulate click events by calling functions
increment();
increment();
decrement();