const workoutData=[
 {user:"A",steps:8000,calories:300},
 {user:"B",steps:12000,calories:500},
 {user:"C",steps:4000,calories:200}
];
class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length===0) throw new Error("Workout dataset cannot be empty.");
    this.data=data;
  }
  getActiveUsers() { return this.data.filter(person => person.steps>7000); }
  getAverageCalories() { return this.data.reduce((sum,p) => sum+p.calories,0)/this.data.length; }
  getUserSummary() { return this.data.map(p => `${p.user} walked ${p.steps} steps and burned ${p.calories} calories.`); }
}
try {
  const analytics=new FitnessAnalytics(workoutData);
  console.log("Active users:",analytics.getActiveUsers());
  console.log("Average calories:",analytics.getAverageCalories());
  console.log("User summaries:");
  analytics.getUserSummary().forEach(message => console.log(message));
} catch(error) { console.log("Analytics error:",error.message); }
// Test empty dataset with: new FitnessAnalytics([])
