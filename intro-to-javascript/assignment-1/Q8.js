
/*
Q8. Employee Salary Projection
Description: Calculate a 5-year salary projection with yearly increments.
*/

let currentSalary = 30000;
let incrementRate = 10;
let salary = currentSalary;
let salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;
    salary = Math.round(salary);

    salaryProjection.push({
        Year: year,
        Salary: salary
    });
}

console.table(salaryProjection);
