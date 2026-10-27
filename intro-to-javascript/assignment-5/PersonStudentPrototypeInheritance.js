// Assignment 5 - Person to Student using Prototype Inheritance
function Person(name) {
    this.name = name;
}

Person.prototype.printName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name); // Initialize the inherited name property.
    this.branch = branch;
}

// Link Student.prototype to Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Priya", "Computer Science");
student.printName();
student.printBranch();

console.log(
    "Student prototype chain reaches Person:",
    Person.prototype.isPrototypeOf(student)
);
