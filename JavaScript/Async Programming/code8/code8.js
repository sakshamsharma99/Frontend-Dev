function submitOrder() {
    return new Promise((resolve, reject) => {
        const success = Math.random() < 0.5;
        setTimeout(() => {
            success ? resolve("Order submitted") : reject("Submission failed");
        }, 500);
    });
}

async function processOrder() {
    for (let i = 1; i <= 3; i++) {
        try {
            await submitOrder();
            console.log(`Attempt ${i}: Success`);
            return;
        } catch (err) {
            console.log(`Attempt ${i}: Failed`);
        }
    }
    throw new Error("Order could not be processed");
}

(async () => {
    try {
        await processOrder();
    } catch (err) {
        console.error(err.message);
    }
})();
