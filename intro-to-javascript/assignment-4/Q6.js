// Q6: Employee Management System (Classes + Object Methods)
class Employee {
    constructor(id, name, department, monthlySalary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = monthlySalary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    applyBonus(percent) {
        if (percent < 0) throw new Error("Bonus cannot be negative.");
        this.salary += this.salary * percent / 100;
    }
}
const employees = [
    new Employee(1, "Aarav", "IT", 40000),
    new Employee(2, "Meera", "HR", 35000),
    new Employee(3, "Kabir", "Finance", 45000),
    new Employee(4, "Anaya", "IT", 50000),
    new Employee(5, "Ishaan", "Sales", 30000)
];
employees[0].applyBonus(10);
employees.forEach(employee =>
    console.log(`${employee.name} (${employee.department}) - Annual salary: ₹${employee.getAnnualSalary().toFixed(2)}`)
);
const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`Total annual payout: ₹${totalAnnualPayout.toFixed(2)}`);
