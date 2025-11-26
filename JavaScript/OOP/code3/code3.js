function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    const discountAmount = this.price * (percent / 100);
    return this.price - discountAmount;
};

const p1 = new Product("Laptop", 50000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Keyboard", 1500);

console.log("Laptop after 10% discount:", p1.applyDiscount(10));
console.log("Headphones after 20% discount:", p2.applyDiscount(20));
console.log("Keyboard after 15% discount:", p3.applyDiscount(15));