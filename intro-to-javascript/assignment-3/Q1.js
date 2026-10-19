
"use strict";

const apiData = [
    "25",
    "true",
    "false",
    "NaN",
    "                     ",
    "100px",
    "3.14",
    null,
    undefined
];

const validNumericData = [];
const invalidData = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    const isBlank =
        typeof value === "string" && value.trim() === "";

    const isValid =
        !isBlank && !Number.isNaN(numberValue);

    const report = {
        originalValue: stringValue,
        numberValue: numberValue,
        booleanValue: booleanValue,
        stringValue: stringValue
    };

    if (isValid) {
        validNumericData.push(report);
    } else {
        invalidData.push(report);
    }

    console.log(`\nRecord ${i + 1}`);
    console.log(`Original Value: ${stringValue}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: ${stringValue}`);
    console.log(`Status: ${isValid ? "Valid" : "Invalid"}`);
}

console.log("\n===== FINAL REPORT =====");

console.log("\nValid Numeric Data:");
for (const item of validNumericData) {
    console.log(item);
}

console.log("\nInvalid Numeric Data:");
for (const item of invalidData) {
    console.log(item);
}

console.log(`\nValid Count: ${validNumericData.length}`);
console.log(`Invalid Count: ${invalidData.length}`);
