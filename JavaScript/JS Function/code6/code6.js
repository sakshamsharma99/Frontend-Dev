function Person(name) {
this.name = name;
}
Person.prototype.showName = function() {
console.log("Name:", this.name);
};

function Faculty(name, dept) {
Person.call(this, name);
this.dept = dept;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.showDept = function() {
console.log("Department:", this.dept);
};

function Professor(name, dept, subject) {
Faculty.call(this, name, dept);
this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.showSubject = function() {
console.log("Subject:", this.subject);
};

const p1 = new Professor("Pratik", "CSE", "JavaScript");
p1.showName();
p1.showDept();
p1.showSubject();
