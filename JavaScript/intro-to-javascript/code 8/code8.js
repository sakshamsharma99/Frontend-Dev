// Current salary and yearly increment rate (%)
let currentSalary = 35000;
let incrementRate = 10;      // 10% increment per year

// Array to store projection data
let projection = [];

// Calculate salary for each of 5 years
for (let year = 1; year <= 5; year++) {

    // Apply increment using assignment operator
    currentSalary += currentSalary * (incrementRate / 100);

    // Push formatted yearly data into array
    projection.push({
        Year: year,
        Salary: Math.round(currentSalary)
    });
}

// Display formatted table
console.table(projection);
