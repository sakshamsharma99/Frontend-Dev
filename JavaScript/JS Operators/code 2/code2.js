let product = " wireless headphones PRO ";

// Trim extra spaces + lowercase
let cleaned = product.trim().toLowerCase();

// Capitalize first letter of each word
let words = cleaned.split(" ");

let capitalized = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "pro" with "Pro Edition"
let finalTitle = capitalized.replace("Pro", "Pro Edition");

// Display results
console.log("Cleaned Title:", finalTitle);
console.log("Length:", finalTitle.length);
