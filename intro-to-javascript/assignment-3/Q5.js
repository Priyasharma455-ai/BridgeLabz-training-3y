
"use strict";

// Hoisting demonstration
try {
    console.log("Score:", score);

    announce();

    var score = 50;

    function announce() {
        console.log("Game started");
    }

    console.log("Status:", status);

    let status = "ready";

    startGame();

    function startGame() {
        console.log("Game started successfully");
    }
} catch (error) {
    console.log("Hoisting error:", error.name);
    console.log(error.message);
}

// Corrected version
console.log("\n===== Corrected Version =====");

const fixedScore = 50;
const fixedStatus = "ready";

const fixedAnnounce = () => {
    console.log("Game started");
};

const fixedStartGame = () => {
    console.log("Status:", fixedStatus);
};

console.log("Score:", fixedScore);
fixedAnnounce();
fixedStartGame();
