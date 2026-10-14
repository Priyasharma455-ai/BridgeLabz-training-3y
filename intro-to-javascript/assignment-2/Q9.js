// Store the results
let results = [];

for (let number = 1; number <= 30; number++) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = number + " - FizzBuzz";
    } else if (number % 2 === 0) {
        result = number + " - Even";
    } else {
        result = number + " - Odd";
    }

    results.push(result);
}

// Display all results
console.log("----- Odd-Even Number Analyzer -----");

for (let result of results) {
    console.log(result);
}