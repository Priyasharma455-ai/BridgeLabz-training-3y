// Assignment 5 - Person -> Student using ES6 classes
class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls Person's constructor and sets this.name.
        this.branch = branch;
    }

    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Priya", "Computer Science");
student.printName();
student.printBranch();

// The ES6 class version has the same visible behavior as the prototype version.
console.log("Student inherits from Person:", student instanceof Person);
console.log("Student instance:", student);
