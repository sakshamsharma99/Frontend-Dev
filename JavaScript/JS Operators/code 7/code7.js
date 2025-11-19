let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let words = feedback.split(" ").length;

// Check negative keywords
let hasNegative = feedback.toLowerCase().includes("bad") ||
                  feedback.toLowerCase().includes("poor");

// Output
console.log("Total Words:", words);

if (!hasNegative) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
