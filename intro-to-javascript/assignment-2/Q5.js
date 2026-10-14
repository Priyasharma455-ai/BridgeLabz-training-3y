// Define security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Function to check home security
function checkSecurity() {
    // Check all required security conditions
    if (
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside
    ) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

// Test Case 1: All conditions are true
console.log("Test Case 1:");
checkSecurity();

// Test Case 2: Door is unlocked
console.log("Test Case 2:");
isDoorLocked = false;
checkSecurity();

// Test Case 3: Owner is outside
console.log("Test Case 3:");
isDoorLocked = true;
isOwnerInside = false;
checkSecurity();

// Demonstrate OR (||) and NOT (!) operators
console.log("Alarm is off:", !isAlarmOn);
console.log(
    "Door unlocked OR window open:",
    !isDoorLocked || !isWindowClosed
);