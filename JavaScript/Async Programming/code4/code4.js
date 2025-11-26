function serverA() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2;
        setTimeout(() => {
            fail ? reject("Server A failed") : resolve("Server A deployed");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2;
        setTimeout(() => {
            fail ? reject("Server B failed") : resolve("Server B deployed");
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch(err => {
        console.error(err);
    });

Promise.race([serverA(), serverB()])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(err => {
        console.error(err);
    });
