// Generate a random secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// User guess (test value — change to test)
let userGuess = 28;

// Store message
let result;

// Check guess using nested conditions
if (userGuess === secretNumber) {
    result = "Correct guess!";
} else {
    
    // Check closeness: within ±3
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        result = "Very close!";
    } else {

        // Check high or low conditions
        if (userGuess > secretNumber) {
            result = "Too high";
        } else {
            result = "Too low";
        }
    }
}

// Output
console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);
console.log("Result:", result);
