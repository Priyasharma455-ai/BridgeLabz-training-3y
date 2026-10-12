
/*
Q5. Weather Activity Planner
*/

let temperature = 12;
let isRaining = false;
let windSpeed = 25;

if (isRaining || (temperature < 15 && windSpeed > 20)) {
    if (isRaining) {
        console.log("Stay indoors with hot coffee.");
    } else {
        console.log("Too cold and windy — stay home.");
    }
} else if (temperature > 35) {
    console.log("Go swimming.");
} else {
    console.log("Perfect day for a walk.");
}
