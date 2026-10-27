// Q1: Prepare coffee using Promise chaining and handle random failures.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function boilWater() {
    return delay(1000).then(() => {
        console.log("Water boiled.");
        if (Math.random() < 0.2) throw new Error("Boiling water failed.");
    });
}
function brewCoffee() {
    return delay(1500).then(() => {
        console.log("Coffee brewed.");
        if (Math.random() < 0.2) throw new Error("Brewing failed.");
    });
}
function pourCoffee() {
    return delay(1000).then(() => {
        console.log("Coffee poured into a cup.");
        if (Math.random() < 0.2) throw new Error("Pouring failed.");
    });
}
boilWater().then(brewCoffee).then(pourCoffee)
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process failed:", error.message));
