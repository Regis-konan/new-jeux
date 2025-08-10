const choices = ["pierre", "feuille", "ciseaux"];
const choiceButtons = document.querySelectorAll(".choice-btn");
const resultText = document.getElementById("round-result");
const scorePlayerEl = document.getElementById("score-player");
const scoreComputerEl = document.getElementById("score-computer");
const restartBtn = document.getElementById("restartBtn");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

// Sons
const clickSound = new Audio("son/click.mp3");
const errorSound = new Audio("son/error.mp3");
const winSound = new Audio("son/win.mp3");

let scorePlayer = 0;
let scoreComputer = 0;
let gameActive = true;
const maxScore = 3; // nombre de manches gagnantes

choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (!gameActive) {
      errorSound.play();
      return;
    }

    clickSound.play();

    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerChoiceDisplay.textContent = getEmoji(playerChoice);
    computerChoiceDisplay.textContent = getEmoji(computerChoice);

    const winner = getWinner(playerChoice, computerChoice);
    updateScores(winner);
    showRoundResult(playerChoice, computerChoice, winner);

    if (scorePlayer === maxScore || scoreComputer === maxScore) {
      endGame();
    }
  });
});

restartBtn.addEventListener("click", restartGame);

function getWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "pierre" && computer === "ciseaux") ||
    (player === "feuille" && computer === "pierre") ||
    (player === "ciseaux" && computer === "feuille")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function updateScores(winner) {
  if (winner === "player") scorePlayer++;
  else if (winner === "computer") scoreComputer++;

  scorePlayerEl.textContent = scorePlayer;
  scoreComputerEl.textContent = scoreComputer;
}

function showRoundResult(player, computer, winner) {
  if (winner === "player") {
    resultText.textContent = "Tu as gagné cette manche !";
  } else if (winner === "computer") {
    resultText.textContent = "L'ordi gagne cette manche...";
  } else {
    resultText.textContent = "Égalité !";
  }
}

function endGame() {
  gameActive = false;
  if (scorePlayer > scoreComputer) {
    resultText.textContent = "🎉 Victoire finale !";
    winSound.play();
  } else {
    resultText.textContent = "💻 L'ordi gagne la partie.";
  }
  restartBtn.classList.remove("hidden");
}

function restartGame() {
  scorePlayer = 0;
  scoreComputer = 0;
  gameActive = true;
  resultText.textContent = "Fais ton choix...";
  scorePlayerEl.textContent = scorePlayer;
  scoreComputerEl.textContent = scoreComputer;
  playerChoiceDisplay.textContent = "❔";
  computerChoiceDisplay.textContent = "❔";
  restartBtn.classList.add("hidden");
}

function getEmoji(choice) {
  if (choice === "pierre") return "✊";
  if (choice === "feuille") return "✋";
  if (choice === "ciseaux") return "✌";
}