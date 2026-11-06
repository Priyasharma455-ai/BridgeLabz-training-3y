class Employee {
  constructor(name, department) { this.name = name; this.department = department; }
  work() { return `${this.name} works in ${this.department}.`; }
}
class Manager extends Employee {
  work() { return `${this.name} manages ${this.department}.`; }
}
const people = [new Employee("Aman","Development"),new Manager("Neha","Human Resources")];
people.forEach(person => console.log(person.work())); // Runtime polymorphism
