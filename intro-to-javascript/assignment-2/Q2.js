
// Store the product name
let productName = " wireless headphones PRO ";

// Remove extra spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word
let words = cleanedName.split(" ");

let capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

let formattedName = capitalizedWords.join(" ");

// Replace "pro" with "Pro Edition"
formattedName = formattedName.replace("Pro", "Pro Edition");

// Display the cleaned title and its length
console.log("Cleaned Product Title:", formattedName);
console.log("Title Length:", formattedName.length);
