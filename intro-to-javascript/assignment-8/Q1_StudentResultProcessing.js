class Student {
  constructor(name, marks) { this.name = name; this.marks = marks; }
  calculateAverage() { return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length; }
  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 80) return "A";
    if (avg >= 60) return "B";
    if (avg >= 40) return "C";
    return "F";
  }
}
const students = [
  new Student("Aarav", [85, 90, 80]),
  new Student("Riya", [65, 70, 60]),
  new Student("Kabir", [30, 35, 25])
];
students.forEach(s => console.log(`${s.name}: Average = ${s.calculateAverage().toFixed(2)}, Grade = ${s.getGrade()}`));
