// Input values
let age = 19;
let isCitizen = true;

// Variable to hold result
let message;

// Nested conditions for eligibility
if (age >= 18) {

    if (isCitizen) {
        // Age ≥ 18 AND citizen
        if (age >= 21) {
            message = "Eligible for all services.";
        } else {
            message = "Eligible to vote only.";
        }
    } else {
        // Age ≥ 18 but NOT a citizen
        message = "Only age criteria met.";
    }

} else {
    // Age below 18 for anyone
    message = "Not eligible yet.";
}

// Output the result
console.log("Age:", age);
console.log("Citizen:", isCitizen);
console.log("Result:", message);
