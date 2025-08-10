// Sons
const clickSound = new Audio("son/click.mp3");
const winSound = new Audio("son/win.mp3");
const errorSound = new Audio("son/error.mp3");

let currentPlayer;
let grid = ["", "", "", "", "", "", "", "", ""];
let gameMode = "duo";
let emojis = { player1: "❌", player2: "⭕" };
let isGameActive = true;

// Raccourcis DOM
const playerSpan = document.getElementById("player");
const gridElement = document.getElementById("grid");
const resultText = document.getElementById("result-text");
const resultContainer = document.querySelector(".result"); // ✅ Conteneur résultat

// Étapes
const emojiSelect = document.querySelector(".emoji-select");
const modeSelect = document.querySelector(".mode-select");
const gameContainer = document.querySelector(".game");

// Valider les symboles
function validateEmojis() {
  const e1 = document.getElementById("emoji1").value.trim() || "❌";
  const e2 = document.getElementById("emoji2").value.trim() || "⭕";

  if (e1 === e2) {
    alert("Les deux joueurs doivent avoir des symboles différents !");
    return;
  }

  emojis.player1 = e1;
  emojis.player2 = e2;
  currentPlayer = emojis.player1;

  emojiSelect.classList.add("hidden");
  modeSelect.classList.remove("hidden");
}

// Choisir mode solo ou duo
function startGame(mode) {
  gameMode = mode;
  grid = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  currentPlayer = emojis.player1;

  document.querySelectorAll(".cell").forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("flash", "shake");
  });

  resultContainer.style.display = "none"; // ✅ Cacher résultat au début

  modeSelect.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  playerSpan.textContent = currentPlayer;

  // Si solo et c'est l'ordi qui commence
  if (gameMode === "solo" && currentPlayer === emojis.player2) {
    setTimeout(aiMove, 500);
  }
}

// Gestion des clics
document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", () => {
    const index = cell.getAttribute("data-index");
    if (!isGameActive || grid[index] !== "") {
      cell.classList.add("shake");
      errorSound.play();
      setTimeout(() => cell.classList.remove("shake"), 300);
      return;
    }

    if (gameMode === "solo" && currentPlayer !== emojis.player1) {
      return;
    }

    grid[index] = currentPlayer;
    cell.textContent = currentPlayer;
    clickSound.play();

    if (checkWin()) {
      endGame(`🎉 Le joueur ${currentPlayer} a gagné !`, winSound);
    } else if (!grid.includes("")) {
      endGame("😮 Match nul !", errorSound);
    } else {
      switchPlayer();
      if (gameMode === "solo" && isGameActive && currentPlayer === emojis.player2) {
        setTimeout(aiMove, 500);
      }
    }
  });
});

function switchPlayer() {
  currentPlayer = currentPlayer === emojis.player1 ? emojis.player2 : emojis.player1;
  playerSpan.textContent = currentPlayer;
}

function aiMove() {
  const move = findBestMove(emojis.player2) || findBestMove(emojis.player1) || randomMove();

  if (move !== null) {
    grid[move] = currentPlayer;
    const cell = document.querySelector(`.cell[data-index="${move}"]`);
    cell.textContent = currentPlayer;
    clickSound.play();

    if (checkWin()) {
      endGame(`🎉 Le joueur ${currentPlayer} a gagné !`, winSound);
    } else if (!grid.includes("")) {
      endGame("😮 Match nul !", errorSound);
    } else {
      switchPlayer();
    }
  }
}

function endGame(message, sound) {
  isGameActive = false;
  resultText.textContent = message;
  resultContainer.style.display = "block"; // ✅ Afficher résultat + bouton rejouer
  sound.play();
  highlightWin();
}

function findBestMove(player) {
  const winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    const values = [grid[a], grid[b], grid[c]];
    if (values.filter(v => v === player).length === 2 && values.includes("")) {
      return [a, b, c][values.indexOf("")];
    }
  }
  return null;
}

function randomMove() {
  const emptyIndices = grid
    .map((val, idx) => val === "" ? idx : null)
    .filter(idx => idx !== null);
  return emptyIndices.length > 0 ? emptyIndices[Math.floor(Math.random() * emptyIndices.length)] : null;
}

function checkWin() {
  const winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return winningCombos.some(combo => {
    const [a, b, c] = combo;
    return grid[a] !== "" && grid[a] === grid[b] && grid[a] === grid[c];
  });
}

function highlightWin() {
  const winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  winningCombos.forEach(combo => {
    const [a, b, c] = combo;
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      [a, b, c].forEach(i => {
        document.querySelector(`.cell[data-index="${i}"]`).classList.add("flash");
      });
    }
  });
}

function restartGame() {
  gameContainer.classList.add("hidden");
  emojiSelect.classList.remove("hidden");
  resultText.textContent = "";
  grid = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  resultContainer.style.display = "none"; // ✅ Cacher résultat au restart
}