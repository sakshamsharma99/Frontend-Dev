const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 700, stock: 50 },
    { id: 3, name: "Shirt", category: "Clothing", price: 800, stock: 8 },
    { id: 4, name: "Shoes", category: "Clothing", price: 1500, stock: 3 },
    { id: 5, name: "Book", category: "Stationery", price: 300, stock: 20 }
];

function getLowStockProducts() {
    return products.filter(p => p.stock < 10);
}

function sortProductsByPrice() {
    return products.slice().sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((total, p) => total + (p.price * p.stock), 0);
}

function groupByCategory() {
    return products.reduce((group, item) => {
        if (!group[item.category]) {
            group[item.category] = [];
        }
        group[item.category].push(item);
        return group;
    }, {});
}

// Testing
console.log("Low Stock:", getLowStockProducts());
console.log("Sorted by Price:", sortProductsByPrice());
console.log("Total Inventory Value:", calculateTotalInventoryValue());
console.log("Grouped by Category:", groupByCategory());
