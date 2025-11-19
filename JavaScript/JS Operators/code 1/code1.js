// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {

    // Local variable
    let salary = 40000;

    // Add bonus only for permanent employees
    if (isPermanent) {
        salary += bonus;
    }

    console.log("Is Permanent:", isPermanent);
    console.log("Total Salary:", salary);
}

// Test calls
calculateSalary(true);
calculateSalary(false);

// Global bonus remains unchanged
console.log("Global Bonus:", bonus);
