function Product(name, price) { this.name = name; this.price = price; }
Product.prototype.applyDiscount = function(percent) {
  if (percent < 0 || percent > 100) throw new Error("Discount must be between 0 and 100.");
  return this.price - (this.price * percent / 100);
};
const products = [new Product("Laptop",50000),new Product("Headphones",3000),new Product("Keyboard",1500)];
const discounts = [10,20,5];
products.forEach((p,i) => console.log(`${p.name}: Original Rs.${p.price}, Discount ${discounts[i]}%, Final Rs.${p.applyDiscount(discounts[i])}`));
// Abstraction: applyDiscount() hides the calculation details behind one simple method call.
