const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store valid and invalid numbers
let validNumbers = [];
let invalidNumbers = [];

console.log("=== Parsed Data Report ===\n");

for (let item of apiData) {
    let asNumber = Number(item);
    let asBoolean = Boolean(item);
    let asString = String(item);

    console.log(`Value: ${item}`);
    console.log(` Number: ${asNumber}`);
    console.log(` Boolean: ${asBoolean}`);
    console.log(` String: "${asString}"`);

    // Check if value is a valid number
    if (!isNaN(asNumber) && item !== " " && item !== "" && item !== "100px") {
        validNumbers.push(asNumber);
    } else {
        invalidNumbers.push(item);
    }

    console.log("--------------------------");
}

// Final Report
console.log("\n=== Summary Report ===");

console.log("\nValid Numeric Data:");
console.log(validNumbers);

console.log("\nInvalid Numeric Data:");
console.log(invalidNumbers);
