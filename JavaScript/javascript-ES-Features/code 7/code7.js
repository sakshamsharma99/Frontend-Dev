"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function SmartCalculator(operation, a, b) {
    try {
        let result;

        switch (operation) {

            case "add":
                result = a + b;
                break;

            case "subtract":
                result = a - b;
                break;

            case "divide":
                if (b === 0) {
                    throw new Error("MathError: Cannot divide by zero.");
                }
                result = a / b;
                break;

            case "power":
                result = Math.pow(a, b);
                break;

            case "root":
                if (a < 0) {
                    throw new Error("MathError: Cannot find square root of negative number.");
                }
                result = Math.sqrt(a);
                break;

            default:
                throw new Error("InvalidOperationError: Operation not supported.");
        }

        console.log(`Operation: ${operation}`);
        console.log(`Input: ${a}, ${b}`);
        console.log(`Result: ${result}`);
        console.log("==============================");

    } catch (err) {
        console.log(`Operation: ${operation}`);
        console.log(`Input: ${a}, ${b}`);
        console.log(`Error: ${err.message}`);
        console.log("==============================");
    }
}

// Run all operations
operations.forEach(op => SmartCalculator(op, num1, num2));
