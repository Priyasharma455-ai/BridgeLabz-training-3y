
"use strict";

// Get number of rows from command line.
// Default value is 5.
const rows = Number(process.argv[2] ?? 5);

if (!Number.isInteger(rows) || rows < 1 || rows > 20) {
    console.log("Please enter a whole number from 1 to 20.");
} else {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trim());
    }
}
