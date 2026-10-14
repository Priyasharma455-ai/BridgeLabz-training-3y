// Store cart items
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;

console.log("----- Shopping Cart -----");

for (let product of cart) {
    let price = product.price;
    let discount = 0;

    if (product.category === "electronics") {
        discount = price * 0.10;
    } else if (product.category === "fashion") {
        discount = price * 0.05;
    }

    let finalPrice = price - discount;
    total += finalPrice;

    console.log(
        product.item + ": Original Price = ₹" + price +
        ", Discount = ₹" + discount +
        ", Final Price = ₹" + finalPrice
    );
}

// Apply extra 5% discount if total exceeds ₹50,000
let extraDiscount = 0;

if (total > 50000) {
    extraDiscount = total * 0.05;
}

let finalTotal = total - extraDiscount;

console.log("Total Before Extra Discount: ₹" + total);
console.log("Extra Discount: ₹" + extraDiscount);
console.log("Final Cart Total: ₹" + finalTotal);