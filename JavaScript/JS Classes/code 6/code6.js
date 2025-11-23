class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * percent) / 100;
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 35000),
    new Employee(2, "Riya", "HR", 30000),
    new Employee(3, "Vikas", "Finance", 40000),
    new Employee(4, "Suman", "Sales", 28000),
    new Employee(5, "Karan", "Marketing", 45000),
];

employees.forEach(e => e.applyBonus(10));

employees.forEach(e => {
    console.log(`${e.name} Annual Salary: ₹${e.getAnnualSalary()}`);
});

const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log(`Total Annual Company Payout: ₹${totalPayout}`);
