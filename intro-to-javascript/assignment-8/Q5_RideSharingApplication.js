class User {
  constructor(name,rating) { this.name=name; this.rating=rating; }
}
class Driver extends User {
  constructor(name,rating,vehicleDetails) { super(name,rating); this.vehicleDetails=vehicleDetails; }
}
class Trip {
  constructor(fromLocation,toLocation,distance) { this.fromLocation=fromLocation; this.toLocation=toLocation; this.distance=distance; }
  calculateFare() {
    if (this.distance === undefined || this.distance === null || this.distance === "") throw new Error("Trip distance was not provided.");
    if (typeof this.distance !== "number" || this.distance < 0) throw new Error("Distance must be a non-negative number.");
    return this.distance * 12; // Illustrative rate: Rs. 12 per km
  }
}
const driver=new Driver("Rahul",4.8,"White Sedan");
console.log(`Driver: ${driver.name}, Rating: ${driver.rating}, Vehicle: ${driver.vehicleDetails}`);
try {
  const trip=new Trip("Mathura","Agra",60);
  console.log(`Route: ${trip.fromLocation} to ${trip.toLocation}`);
  console.log("Fare: Rs.",trip.calculateFare());
  // Test error: const badTrip=new Trip("Mathura","Agra",-5); console.log(badTrip.calculateFare());
} catch(error) { console.log("Unable to calculate fare:",error.message); }
