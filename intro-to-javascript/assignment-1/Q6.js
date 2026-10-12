
/*
Q6. Progressive Discount System
*/

let totalAmount = 12000;
let discountRate;

if (totalAmount >= 10000) {
    discountRate = 25;
} else if (totalAmount >= 5000) {
    discountRate = 15;
} else if (totalAmount >= 2000) {
    discountRate = 5;
} else {
    discountRate = 0;
}

let discountAmount = Math.round(totalAmount * discountRate / 100);
let finalAmount = Math.round(totalAmount - discountAmount);

console.log(`Original Total: ₹${totalAmount}`);
console.log(`Discount Percentage: ${discountRate}%`);
console.log(`Final Price After Discount: ₹${finalAmount}`);
