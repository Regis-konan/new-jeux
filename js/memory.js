const emojis = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮"];

const levelSelect = document.getElementById("level");
const startBtn = document.getElementById("startBtn");
const gameDiv = document.getElementById("game");
const grid = document.getElementById("grid");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const levelSelectDiv = document.querySelector(".level-select");

// 🎵 Sons
const clickSound = new Audio("son/click.mp3");
const matchSound = new Audio("son/match.mp3");
const errorSound = new Audio("son/error.mp3");
const winSound = new Audio("son/win.mp3");

// Nouveaux éléments pour timer & coups
const statsDiv = document.createElement("div");
statsDiv.classList.add("stats");
const timerP = document.createElement("p");
timerP.textContent = "Temps : 0s";
const movesP = document.createElement("p");
movesP.textContent = "Coups : 0";
statsDiv.appendChild(timerP);
statsDiv.appendChild(movesP);
gameDiv.insertBefore(statsDiv, grid);

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
let totalPairs = 0;

let timer = null;
let secondsElapsed = 0;
let movesCount = 0;

startBtn.addEventListener("click", () => {
  const pairs = parseInt(levelSelect.value, 10);
  totalPairs = pairs;
  matchedPairs = 0;
  secondsElapsed = 0;
  movesCount = 0;
  timerP.textContent = `Temps : 0s`;
  movesP.textContent = `Coups : 0`;

  levelSelectDiv.classList.add("hidden");
  gameDiv.classList.remove("hidden");
  message.textContent = "";
  restartBtn.classList.add("hidden");
  setupGrid(pairs);

  // Démarrer le timer
  clearInterval(timer);
  timer = setInterval(() => {
    secondsElapsed++;
    timerP.textContent = `Temps : ${secondsElapsed}s`;
  }, 1000);
});

restartBtn.addEventListener("click", () => {
  levelSelectDiv.classList.remove("hidden");
  gameDiv.classList.add("hidden");
  grid.innerHTML = "";
  message.textContent = "";
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  clearInterval(timer);
});

function setupGrid(pairs) {
  const selectedEmojis = emojis.slice(0, pairs);
  const cardEmojis = [...selectedEmojis, ...selectedEmojis];
  shuffle(cardEmojis);
  grid.style.gridTemplateColumns = pairs > 8 ? "repeat(6, 1fr)" : "repeat(4, 1fr)";
  grid.innerHTML = "";

  cardEmojis.forEach((emoji) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;

    card.innerHTML = `
      <div class="front">${emoji}</div>
      <div class="back">?</div>
    `;

    card.addEventListener("click", () => flipCard(card));
    grid.appendChild(card);
  });
}

function flipCard(card) {
  if (lockBoard || card === firstCard || card.classList.contains("flipped")) return;

  card.classList.add("flipped");
  clickSound.play(); // 🎵 click
  movesCount++;
  movesP.textContent = `Coups : ${movesCount}`;

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;

  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    matchSound.play(); // 🎵 match
    matchedPairs++;
    firstCard.removeEventListener("click", () => flipCard(firstCard));
    secondCard.removeEventListener("click", () => flipCard(secondCard));
    resetTurn();

    if (matchedPairs === totalPairs) {
      clearInterval(timer);
      winSound.play(); // 🎵 win
      message.textContent = `🎉 Bravo, tu as gagné en ${secondsElapsed}s avec ${movesCount} coups !`;
      restartBtn.classList.remove("hidden");
    }
  } else {
    errorSound.play(); // 🎵 erreur
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 1000);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}