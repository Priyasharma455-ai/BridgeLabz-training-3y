// Q7: Load dashboard modules with Promise.allSettled() and measure elapsed time.
function loadModule(name, message, delayMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.25) reject(new Error(`${name} failed`));
            else resolve(message);
        }, delayMs);
    });
}
async function loadDashboard() {
    const startTime = Date.now();
    const results = await Promise.allSettled([
        loadModule("Profile", "Profile Loaded", 2000),
        loadModule("Posts", "Posts Loaded", 1500),
        loadModule("Messages", "Messages Loaded", 1000)
    ]);
    const names = ["Profile", "Posts", "Messages"];
    results.forEach((result, index) => {
        if (result.status === "fulfilled") console.log(`${names[index]} succeeded: ${result.value}`);
        else console.log(`${names[index]} failed: ${result.reason.message}`);
    });
    console.log(`Total time taken: ${Date.now() - startTime} ms`);
}
loadDashboard();
