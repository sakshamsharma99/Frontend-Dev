
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

function calculateBonus(employeeList) {
    for (let emp of employeeList) {
        try {
            // Strict validation: Check property existence
            if (!emp.name || !emp.salary || !emp.years) {
                throw new Error("Missing employee properties");
            }

            // Convert salary & years to Number
            const salary = Number(emp.salary);
            const years = Number(emp.years);

            // Ensure numeric conversion was valid
            if (isNaN(salary) || isNaN(years)) {
                throw new Error(`Invalid number for employee: ${emp.name}`);
            }

            // Bonus Calculation
            let bonus = (years > 3) ? salary * 0.10 : salary * 0.05;

            // Template string output
            console.log(`
Employee Name : ${emp.name}
Salary        : ₹${salary}
Years Worked  : ${years}
Bonus Earned  : ₹${bonus}
            `);

        } catch (error) {
            console.log(`Error for employee ${emp.name}: ${error.message}`);
        }
    }
}

calculateBonus(employees);
