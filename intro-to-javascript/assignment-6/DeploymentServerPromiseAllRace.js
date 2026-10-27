// Q4: Compare Promise.all() (all servers) and Promise.race() (first response).
function contactServer(serverName, delayMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject(new Error(`${serverName} failed.`));
            else resolve(`${serverName} responded`);
        }, delayMs);
    });
}
Promise.all([contactServer("Server A", 2000), contactServer("Server B", 3000)])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.error("Deployment failed:", error.message));
Promise.race([contactServer("Server A", 2000), contactServer("Server B", 3000)])
    .then(result => console.log("Fastest response:", result))
    .catch(error => console.error("Race failed:", error.message));
