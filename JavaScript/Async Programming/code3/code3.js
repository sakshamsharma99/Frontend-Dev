function getBugs() {
    return new Promise((resolve, reject) => {
        const apiFail = Math.random() < 0.2;
        setTimeout(() => {
            if (!apiFail) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("Failed to fetch bugs from server");
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs);
    })
    .catch(err => {
        console.error(err);
    });
