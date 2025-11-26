function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");
        setTimeout(() => {
            Math.random() < 0.9 ? resolve("Water boiled") : reject("Failed while boiling water");
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee...");
        setTimeout(() => {
            Math.random() < 0.9 ? resolve("Coffee brewed") : reject("Failed while brewing coffee");
        }, 1200);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee into cup...");
        setTimeout(() => {
            Math.random() < 0.9 ? resolve("Coffee poured") : reject("Failed while pouring coffee");
        }, 1100);
    });
}

boilWater()
    .then(result => {
        console.log(result);
        return brewCoffee();
    })
    .then(result => {
        console.log(result);
        return pourCoffee();
    })
    .then(result => {
        console.log(result);
        console.log("Coffee ready for the team!");
    })
    .catch(error => {
        console.error("Process failed:", error);
    });
