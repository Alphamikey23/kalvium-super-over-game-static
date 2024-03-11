const strikeButton = document.getElementById("strike");
const resetButtonElement = document.getElementById("reset");

const $team1Score = document.getElementById("score-team1");
const $team2Score = document.getElementById("score-team2");

const $team1Wicket = document.getElementById("wickets-team1");
const $team2Wicket = document.getElementById("wickets-team2");

let team1Score = 0, team2Score = 0, team1Wicket = 0, team2Wicket = 0, playerTurn = 1, team1Ball = 0, team2Ball = 1;

const possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];

function gameOver() {
    if (team1Score > team2Score) alert("India won the game!");
    else if (team1Score < team2Score) alert("Pakistan won the game!");
    else alert("Play again");
}

function updateScore() {
    $team1Score.textContent = team1Score;
    $team2Score.textContent = team2Score;
    $team1Wicket.textContent = team1Wicket;
    $team2Wicket.textContent = team2Wicket;
}

resetButtonElement.onclick = () => {
    window.location.reload();
};

strikeButton.onclick = () => {
    const randomRuns = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

    if (playerTurn === 1) {
        team1Ball++;
        const team1BallElement = document.querySelector(`#team1-superover div:nth-child(${team1Ball})`);
        team1BallElement.textContent = randomRuns;

        if (randomRuns === 'W') {
            team1Wicket++;
        } else {
            team1Score += randomRuns;
        }
    }
    updateScore();
    if (team1Ball === 6 || team1Wicket === 10) {
        playerTurn = 2;
        // Here you can add code to switch to the next player's turn or end the game if necessary.
    }
};
