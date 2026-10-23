// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(name, price, quantity) {
        if (!name || !Number.isFinite(price) || price < 0 || !Number.isInteger(quantity) || quantity < 1) {
            throw new Error("Provide a name, non-negative price, and whole-number quantity of at least 1.");
        }
        this.items.push({ name, price, quantity });
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    applyCoupon(coupon) {
        if (!/^(SAVE20|DISC10)$/.test(coupon)) {
            return { valid: false, discountPercent: 0, finalTotal: this.getTotal() };
        }
        const discountPercent = coupon === "SAVE20" ? 20 : 10;
        return { valid: true, discountPercent, finalTotal: this.getTotal() * (1 - discountPercent / 100) };
    }
}
const cart = new Cart();
cart.addItem("Keyboard", 1200, 1);
cart.addItem("Notebook", 100, 3);
console.log("Cart items:", cart.items);
console.log(`Total: ₹${cart.getTotal().toFixed(2)}`);
const coupon = "SAVE20"; // Test SAVE20, DISC10, or an invalid code.
const result = cart.applyCoupon(coupon);
console.log(result.valid ? `Coupon accepted: ${result.discountPercent}% off.` : "Invalid coupon. No discount applied.");
console.log(`Final total: ₹${result.finalTotal.toFixed(2)}`);
