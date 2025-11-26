class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

console.log("Initial Balance:", account.getBalance());

account.deposit(1500);
console.log("After Deposit:", account.getBalance());

try {
    account.withdraw(8000);
} catch (e) {
    console.log("Error:", e.message);
}

console.log("Final Balance:", account.getBalance());
