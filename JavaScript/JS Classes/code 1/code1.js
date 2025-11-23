
// product.js
// Q1: E-Commerce Product Manager (Classes + Objects)

// Product class definition
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply a discount percentage to price
    applyDiscount(discountPercent) {
        const discountAmount = (this.price * discountPercent) / 100;
        this.price = this.price - discountAmount;
    }

    // Method to display product details
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Creating multiple product objects
const products = [
    new Product(1, "Smartphone", 15000, "Electronics"),
    new Product(2, "Shoes", 800, "Footwear"),
    new Product(3, "Laptop", 55000, "Electronics"),
    new Product(4, "Watch", 1200, "Accessories")
];

// Applying discount to all products
products.forEach(product => product.applyDiscount(10)); // 10% discount

// Displaying all product details
console.log("All Product Details After Discount:");
products.forEach(product => console.log(product.getDetails()));

// Filtering products whose price is greater than 1000
console.log("\nProducts with Price > 1000:");
const expensiveProducts = products.filter(product => product.price > 1000);

// Display expensive products
expensiveProducts.forEach(product => console.log(product.getDetails()));

