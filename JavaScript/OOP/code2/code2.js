const menu = {
    burger: 120,
    pizza: 250,
    pasta: 180,
    momos: 90,
    sandwich: 100
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(`Item "${item}" is not available in the menu`);
            }
            return menu[item];
        });

        const total = prices.reduce((sum, p) => sum + p, 0);
        return `Total Bill: ₹${total}`;
    }
    catch (error) {
        return `Error: ${error.message}`;
    }
}

console.log(calculateBill(["pizza", "burger", "momos"]));
console.log(calculateBill(["pizza", "icecream"]));
