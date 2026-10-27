// Q10: Run delivery steps sequentially with random 1–2 second delays.
function runDeliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delayMs = 1000 + Math.floor(Math.random() * 1001);
        setTimeout(() => {
            if (Math.random() < 0.2) reject(new Error(`${stepName} failed`));
            else { console.log(successMessage); resolve(); }
        }, delayMs);
    });
}
async function runPipeline() {
    console.log("Start Pipeline");
    try {
        await runDeliveryStep("takeOrder", "Step 1: Order taken");
        await runDeliveryStep("prepare", "Step 2: Food prepared");
        await runDeliveryStep("pack", "Step 3: Package ready");
        await runDeliveryStep("dispatch", "Step 4: Out for delivery");
        await runDeliveryStep("deliver", "Delivery completed!");
    } catch (error) {
        console.error("Pipeline failed!");
        console.error("Details:", error.message);
    }
}
runPipeline();
// await pauses this async function until each Promise settles. A rejection
// transfers control to catch, so remaining delivery steps are skipped.
