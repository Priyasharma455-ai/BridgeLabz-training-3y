
/*
Q1. Personalized Login Greeting
Display a greeting based on the current time.
*/

// Declare the user's name
let userName = "Priya";

// Get the current hour using the Date object
let currentHour = new Date().getHours();

// Display a greeting based on the current hour
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour >= 12 && currentHour < 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
