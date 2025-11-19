// Step 1: Create an array of expenses for 5 categories
// [food, travel, rent, bills, leisure]
let expenses = [5000, 1500, 8000, 2000, 1200];

// Step 2: Calculate total expenses
let total = 0;

// Add each expense to total (you can also use reduce, but simple loop for clarity)
for (let amount of expenses) {
    total += amount;
}

// Step 3: Calculate average
let average = total / expenses.length;

// Step 4: Add 10% tax using arithmetic + assignment operators
let taxRate = 0.10;
let finalAmount = total;
finalAmount += finalAmount * taxRate;  // adds 10% tax

// Step 5: Round values using toFixed(2)
total = total.toFixed(2);
average = average.toFixed(2);
finalAmount = finalAmount.toFixed(2);

// Step 6: Display the results
console.log("Total Expenses: " + total);
console.log("Average Expense: " + average);
console.log("Final Amount with Tax: " + finalAmount);
