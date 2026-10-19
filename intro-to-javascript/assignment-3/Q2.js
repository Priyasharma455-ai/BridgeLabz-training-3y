
"use strict";

// Employee data given in the assignment
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("===== Employee Bonus Report =====");

for (const employee of employees) {
    try {
        // Check whether required properties are available
        if (
            !employee ||
            employee.name === undefined ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Missing employee property");
        }

        // Convert string values into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Check whether the converted values are valid
        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error("Invalid salary or years value");
        }

        // Calculate bonus
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        const totalSalary = salary + bonus;

        // Display employee details using template literals
        console.log(`\nEmployee: ${employee.name}`);
        console.log(`Salary: ${salary}`);
        console.log(`Years of Service: ${years}`);
        console.log(`Bonus: ${bonus}`);
        console.log(`Total Salary: ${totalSalary}`);

    } catch (error) {
        console.log(`Error processing employee: ${error.message}`);
    }
}
