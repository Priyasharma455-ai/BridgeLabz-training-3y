
/*
Q3. Monthly Expense Tracker
*/

let expenses = [3000, 1500, 8000, 2000, 1000];
let totalExpenses = 0;

for (let expense of expenses) {
    totalExpenses += expense;
}

let averageExpense = totalExpenses / expenses.length;
let tax = totalExpenses * 0.10;
let finalAmount = totalExpenses + tax;

console.log(`Total Expenses: ₹${totalExpenses.toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${finalAmount.toFixed(2)}`);
