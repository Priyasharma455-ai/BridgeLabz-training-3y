// Q3: Convert callback-style bug fetching into a Promise-based getBugs().
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFails = Math.random() < 0.3; // Boolean controls simulated failure.
            if (apiFails) reject(new Error("Bug tracker API request failed."));
            else resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}
getBugs()
    .then(bugs => {
        console.log("Bugs retrieved successfully:");
        console.table(bugs.map((bug, index) => ({ number: index + 1, bug })));
    })
    .catch(error => console.error("Unable to fetch bugs:", error.message));
