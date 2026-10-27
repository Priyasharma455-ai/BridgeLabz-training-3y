// Assignment 5 - Arrow Function and the 'this' Keyword
const user = {
    name: "Priya",
    // Arrow functions do not get their own 'this'.
    // In this top-level example, this.name is normally undefined in Node.js.
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName();

// A normal method gets 'this' from the object used to call it.
user.showNameCorrectly = function () {
    console.log("Normal function this.name:", this.name);
};

user.showNameCorrectly();
