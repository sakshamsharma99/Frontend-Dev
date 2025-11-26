class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, val) => sum + val, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        else return "F";
    }
}

const s1 = new Student("Pratik", [95, 90, 92, 88]);
const s2 = new Student("Aman", [72, 68, 70, 75]);
const s3 = new Student("Rohan", [40, 55, 48, 50]);

console.log("Student:", s1.name, "Avg:", s1.calculateAverage(), "Grade:", s1.getGrade());
console.log("Student:", s2.name, "Avg:", s2.calculateAverage(), "Grade:", s2.getGrade());
console.log("Student:", s3.name, "Avg:", s3.calculateAverage(), "Grade:", s3.getGrade());
