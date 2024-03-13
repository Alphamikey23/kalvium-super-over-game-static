document.addEventListener("DOMContentLoaded", function() {
    // Getting HTML elements
const strikeButton = document.getElementById("strike");
const resetButton = document.getElementById("reset");

const team1ScoreDisplay = document.getElementById("score-team1");
const team2ScoreDisplay = document.getElementById("score-team2");

const team1WicketDisplay = document.getElementById("wickets-team1");
const team2WicketDisplay = document.getElementById("wickets-team2");

// Initializing game variables
let team1Score = 0;
let team2Score = 0;
let team1Wickets = 0;
let team2Wickets = 0;
let playerTurn = "India";
let team1BallsFaced = 0;
let team2BallsFaced = 0;

// Possible outcomes of a ball
const possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];

// Function to handle game over
function gameOver() {
    if (team1Score > team2Score) {
        alert("India won the game!");
    } else if (team1Score < team2Score) {
        alert("Pakistan won the game!");
    } else {
        alert("It's a tie!");
    }
}

// Function to update the score display
function updateScore() {
    team1ScoreDisplay.textContent = team1Score;
    team2ScoreDisplay.textContent = team2Score;
    team1WicketDisplay.textContent = team1Wickets;
    team2WicketDisplay.textContent = team2Wickets;
}

// Event listener for the reset button
if (resetButton) {
    resetButton.onclick = () => {
        window.location.reload();
    };
} else {
    console.log("Reset button not found");
}

// Event listener for the strike button
strikeButton.onclick = () => {
    // Simulate a ball outcome
    const randomOutcome = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

    // For Team 1's batting (India)
    if (playerTurn === "India") {
        team1BallsFaced++;
        const team1BallElement = document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`);
        team1BallElement.textContent = randomOutcome;

        // If it's a wicket, increment wickets count
        if (randomOutcome === 'W') {
            team1Wickets++;
        } else {
            team1Score += randomOutcome;
        }

        // Check if the team's innings is over
        if (team1BallsFaced === 6 || team1Wickets === 10) {
            playerTurn = "Pakistan"; // Switch to Team 2's turn
            // Here you can add code to handle the end of Team 1's innings
        }
    }
    // For Team 2's batting (Pakistan)
    else if (playerTurn === "Pakistan") {
        team2BallsFaced++;
        const team2BallElement = document.querySelector(`#team2-superover div:nth-child(${team2BallsFaced})`);
        team2BallElement.textContent = randomOutcome;

        // If it's a wicket, increment wickets count
        if (randomOutcome === 'W') {
            team2Wickets++;
        } else {
            team2Score += randomOutcome;
        }

        // Check if the team's innings is over
        if (team2BallsFaced === 6 || team2Wickets === 10) {
            gameOver(); // Call the game over function
        }
    }

    // Update the score display
    updateScore();
};
});