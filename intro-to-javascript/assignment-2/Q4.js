// Generate 8 random scores between 30 and 100
let scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

// Use map() to display student-wise scores
let studentScores = scores.map((score, index) => ({
    student: index + 1,
    score: score
}));

// Find highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate average using reduce()
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

// Find students who passed
let passedStudents = scores.filter(score => score >= 50);

// Display the complete summary
console.log("Student Scores:", studentScores);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passedStudents.length} out of ${scores.length}`);
