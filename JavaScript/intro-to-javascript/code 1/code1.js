// Step 1: Declare a variable for user's name
let userName = "Pratik"; 

// Step 2: Get the current hour (0–23) from JavaScript Date object
let currentHour = new Date().getHours();

// Step 3: Declare a variable to store the greeting message
let greeting;

// Step 4: Apply time-based conditions
// Before 12 → Good Morning
if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;

// Between 12 and 17 → Good Afternoon
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;

// 17 or later → Good Evening
} else {
    greeting = `Good Evening ${userName}!`;
}

// Step 5: Print the greeting message
console.log(greeting);
