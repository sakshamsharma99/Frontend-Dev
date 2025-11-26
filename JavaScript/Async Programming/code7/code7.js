function loadProfile() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;
        setTimeout(() => {
            fail ? reject("Profile Failed") : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;
        setTimeout(() => {
            fail ? reject("Posts Failed") : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;
        setTimeout(() => {
            fail ? reject("Messages Failed") : resolve("Messages Loaded");
        }, 1000);
    });
}

const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then(results => {
        results.forEach(result => {
            if (result.status === "fulfilled") {
                console.log("Success:", result.value);
            } else {
                console.log("Failure:", result.reason);
            }
        });

        const end = Date.now();
        console.log("Total time:", (end - start) + "ms");
    });
