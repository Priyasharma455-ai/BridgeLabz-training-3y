
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsedData = JSON.parse(rawData[i]);

        if (
            parsedData.user === undefined ||
            parsedData.age === undefined
        ) {
            throw new Error("Missing user or age key");
        }

        const age = Number(parsedData.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age");
        }

        const cleanedRecord = {
            user: parsedData.user,
            age: age
        };

        cleanData.push(cleanedRecord);
        console.log(`Line ${i + 1}: Valid JSON`);
    } catch (error) {
        errors.push({
            line: i + 1,
            reason: error.message
        });

        console.log(`Line ${i + 1}: Error - ${error.message}`);
    }
}

console.log("\n===== Audit Report =====");
console.log("Clean data:", cleanData);
console.log("Errors:", errors);

// Bonus: Find users under 18
const under18 = cleanData.filter(person => person.age < 18);
console.log("Users under 18:", under18);
