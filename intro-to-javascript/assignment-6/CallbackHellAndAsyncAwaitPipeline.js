// Q5: Show nested callbacks, then rewrite the pipeline using async/await.
function runStageCallback(stage, callback) {
    setTimeout(() => { console.log(stage); callback(); }, 1000);
}
function runCallbackPipeline() {
    console.log("Callback version:");
    runStageCallback("Design", () => runStageCallback("Build", () =>
        runStageCallback("Test", () => runStageCallback("Deploy", () =>
            runStageCallback("Celebrate", () => {
                console.log("Callback pipeline complete.");
                runAsyncPipeline();
            })
        ))
    ));
}
function runStagePromise(stage) {
    return new Promise(resolve => setTimeout(() => { console.log(stage); resolve(); }, 1000));
}
async function runAsyncPipeline() {
    console.log("\nAsync/await version:");
    await runStagePromise("Design");
    await runStagePromise("Build");
    await runStagePromise("Test");
    await runStagePromise("Deploy");
    await runStagePromise("Celebrate");
    console.log("Async/await pipeline complete.");
}
// async/await reads like sequential code and avoids deeply nested callbacks.
runCallbackPipeline();
