// Assignment 5 - Constructor Function and Prototype Method
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// One shared method is stored on Car.prototype, not copied into every car.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const firstCar = new Car("Toyota", "Innova");
const secondCar = new Car("Honda", "City");

firstCar.getDetails();
secondCar.getDetails();

console.log(
    "Both cars share the same prototype method:",
    firstCar.getDetails === secondCar.getDetails
);
