// Store the customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase for checking
let lowerCaseFeedback = feedback.toLowerCase();

// Count the words in the feedback
let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

// Check whether feedback contains "bad" or "poor"
if (
    lowerCaseFeedback.includes("bad") ||
    lowerCaseFeedback.includes("poor")
) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

// Display feedback and word count
console.log("Customer Feedback:", feedback);
console.log("Word Count:", wordCount);