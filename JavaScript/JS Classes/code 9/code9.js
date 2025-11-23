class Cart {
    constructor() {
        this.items = [];
        this.coupon = null;
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(code) {
        const reg = /^(SAVE|DISC)(\d{1,2})$/;
        const match = code.match(reg);

        if (!match) {
            console.log("Invalid coupon format");
            return;
        }

        const discountPercent = parseInt(match[2]);
        const total = this.getTotal();
        const discountAmount = (total * discountPercent) / 100;
        const finalTotal = total - discountAmount;

        console.log(
            `Coupon Applied: ${discountPercent}% off\nOriginal Total: ₹${total}\nFinal Total: ₹${finalTotal}`
        );
    }
}

const cart = new Cart();

cart.addItem("Shoes", 1500, 2);
cart.addItem("T-Shirt", 800, 1);
cart.addItem("Cap", 300, 1);

console.log("Cart Total:", cart.getTotal());

cart.applyCoupon("SAVE20");
