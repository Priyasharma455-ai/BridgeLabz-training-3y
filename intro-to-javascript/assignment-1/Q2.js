
/*
Q2. Multi-Type Data Summary
Description: Display different JavaScript data types in a formatted table.
*/

// Declare variables of different data types
let userName = "Priya";                 // String
let userAge = 20;                       // Number
let isStudent = true;                   // Boolean
let skills = ["Java", "JavaScript"];    // Array
let userDetails = { city: "Mathura" };  // Object
let middleName = null;                  // Null
let address;                            // Undefined

// Create a report containing each variable's name, value, and type
let dataSummary = [
    {
        label: "userName",
        value: userName,
        type: typeof userName
    },
    {
        label: "userAge",
        value: userAge,
        type: typeof userAge
    },
    {
        label: "isStudent",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "skills",
        value: skills,
        type: Array.isArray(skills) ? "array" : typeof skills
    },
    {
        label: "userDetails",
        value: userDetails,
        type: typeof userDetails
    },
    {
        label: "middleName",
        value: middleName,
        type: typeof middleName
    },
    {
        label: "address",
        value: address,
        type: typeof address
    }
];

// Display the complete report in a formatted table
console.table(dataSummary);
