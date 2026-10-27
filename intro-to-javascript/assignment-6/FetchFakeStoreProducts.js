// Q6: Fetch products from Fake Store API and print title, price, and image URL.
async function displayProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const products = await response.json();
        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("-----------------------------");
        });
    } catch (error) {
        console.error("Failed to load products. Please try again.");
        console.error("Details:", error.message);
    }
}
displayProducts();
// Requires Node.js 18+ (global fetch) or a browser. HTML cards are optional.
