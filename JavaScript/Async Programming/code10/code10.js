function simulateStep(message) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;
        const success = Math.random() < 0.85;

        setTimeout(() => {
            success ? resolve(message) : reject(`Failed at: ${message}`);
        }, delay);
    });
}

function takeOrder() {
    return simulateStep("Step 1: Order taken");
}

function prepare() {
    return simulateStep("Step 2: Food prepared");
}

function pack() {
    return simulateStep("Step 3: Package ready");
}

function dispatch() {
    return simulateStep("Step 4: Out for delivery");
}

function deliver() {
    return simulateStep("Delivery completed!");
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        console.log(await takeOrder());
        console.log(await prepare());
        console.log(await pack());
        console.log(await dispatch());
        console.log(await deliver());
    } catch (error) {
        console.log("Pipeline failed!");
        console.error(error);
    }
}

runPipeline();
