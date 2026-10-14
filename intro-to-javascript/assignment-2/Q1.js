
// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;
    let totalSalary;

    // Calculate salary based on permanent status
    if (isPermanent === true) {
        totalSalary = salary + bonus;
    } else {
        totalSalary = salary;
    }

    // Display total salary
    console.log("Is Permanent:", isPermanent);
    console.log("Total Salary:", totalSalary);
}

// Test both conditions
calculateSalary(true);
calculateSalary(false);

// Check global bonus
console.log("Global Bonus:", bonus);
