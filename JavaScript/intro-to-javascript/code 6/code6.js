// Total purchase amount
let total = 7800;

// Variable to store discount percentage
let discountPercent = 0;

// Apply discount tiers
if (total >= 10000) {
    discountPercent = 25;
} else if (total >= 5000) {
    discountPercent = 15;
} else if (total >= 2000) {
    discountPercent = 5;
} else {
    discountPercent = 0;
}

// Calculate discount amount
let discountAmount = (total * discountPercent) / 100;

// Calculate final price
let finalPrice = total - discountAmount;

// Round values using Math.round()
total = Math.round(total);
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

// Output results
console.log("Original Total:", total);
console.log("Discount Applied:", discountPercent + "%");
console.log("Final Price After Discount:", finalPrice);
