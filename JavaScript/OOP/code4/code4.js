class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    work() {
        return `${this.name} is managing the ${this.department} department`;
    }
}

const e1 = new Employee("Pratik", "Sales");
const m1 = new Manager("Aman", "IT");

console.log(e1.work());
console.log(m1.work());
