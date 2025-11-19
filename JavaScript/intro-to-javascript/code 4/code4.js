// Array of marks for 5 subjects
let marks = [78, 85, 92, 66, 74];

// Check if any subject is below 35 → automatic detention
let hasFailSubject = marks.some(mark => mark < 35);

// Calculate total
let total = 0;
for (let m of marks) {
    total += m;
}

// Calculate average and percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Decision using conditions
let result;

if (hasFailSubject) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

// Output
console.log("Average Marks:", average.toFixed(2) + "%");
console.log("Overall Percentage:", percentage.toFixed(2) + "%");
console.log("Final Result:", result);
