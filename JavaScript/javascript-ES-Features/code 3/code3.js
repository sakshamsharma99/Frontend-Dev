
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

function validateTransactions(list) {

    const valid = [];
    const invalid = [];

    for (let tx of list) {

        try {
            // Breakpoint (place in DevTools)
            // debugger;

            // 1. Null entry check
            if (tx === null) {
                throw new Error("Null transaction entry");
            }

            // 2. Missing required properties
            if (tx.id === undefined || tx.amount === undefined) {
                throw new Error(`Missing id or amount in transaction`);
            }

            // 3. Negative amount
            if (tx.amount < 0) {
                throw new Error(`Negative amount not allowed`);
            }

            // If all checks pass → valid
            valid.push(tx);

        } catch (err) {
            invalid.push({
                transaction: tx,
                message: err.message
            });
        }
    }

    // Final Report
    console.log("===== VALID TRANSACTIONS =====");
    console.table(valid);

    console.log("===== INVALID TRANSACTIONS =====");
    console.table(invalid);

    console.log(`
Summary Report
Total Transactions     : ${list.length}
Valid Transactions     : ${valid.length}
Invalid Transactions   : ${invalid.length}
    `);
}

validateTransactions(transactions);
