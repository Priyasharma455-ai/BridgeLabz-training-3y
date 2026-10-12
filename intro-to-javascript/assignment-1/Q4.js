
/*
Q4. Academic Performance Evaluator
Description: Evaluate student performance using subject marks and percentage.
*/

// Store marks of five subjects in an array
let marks = [90, 88, 92, 85, 95];

// Calculate the total marks
let totalMarks = 0;

for (let mark of marks) {
    totalMarks += mark;
}

// Calculate average and overall percentage
let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
let hasFailedSubject = marks.some(mark => mark < 35);

// Determine the result using logical operators and conditions
let result;

if (hasFailedSubject || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
}

// Display the result
console.log(`Subject Marks: ${marks}`);
console.log(`Total Marks: ${totalMarks}/500`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
