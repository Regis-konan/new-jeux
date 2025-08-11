// Sons
const clickSound = new Audio("son/click.mp3");
const winSound = new Audio("son/win.mp3");
const errorSound = new Audio("son/error.mp3");

const categories = {
  animaux: [
    "chat", "chien", "éléphant", "girafe", "serpent", "lion", "tigre", "zèbre", 
    "panthère", "singe", "panda", "koala", "loup", "ours", "cheval", "dauphin"
  ],
  pays: [
    "france", "allemagne", "brazil", "japon", "canada", "espagne", "italie", 
    "mexique", "chine", "inde", "argentine", "australie", "maroc", "tunisie"
  ],
  objets: [
    "ordinateur", "téléphone", "clavier", "chaise", "table", "lampe", "bouteille", 
    "voiture", "stylo", "cahier", "lunettes", "télévision", "brosse", "radio"
  ]
};

const categorySelection = document.getElementById("category-selection");
const startBtn = document.getElementById("startBtn");
const categorySelect = document.getElementById("category-select");
const gameContainer = document.getElementById("game-container");
const wordEl = document.getElementById("word");
const triesEl = document.getElementById("tries");
const keyboardEl = document.getElementById("keyboard");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

let chosenWord = "";
let guessedLetters = [];
let triesLeft = 6;
let currentCategory = "";
let winCount = 0; // compteur de victoires

startBtn.addEventListener("click", () => {
  currentCategory = categorySelect.value;
  startGame(currentCategory);
});

restartBtn.addEventListener("click", () => {
  startGame(currentCategory);
});

function saveHighScore(score) {
  const key = 'score_pendu';
  const highScore = localStorage.getItem(key) || 0;
  if(score > highScore) {
    localStorage.setItem(key, score);
    alert("Nouveau record de victoires au Pendu !");
  }
}

function startGame(category) {
  const words = categories[category];
  chosenWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  triesLeft = 6;
  triesEl.textContent = triesLeft;
  resultEl.textContent = "";
  restartBtn.classList.add("hidden");

  categorySelection.classList.add("hidden");
  gameContainer.classList.remove("hidden");

  createKeyboard();
  updateWordDisplay();
}

function createKeyboard() {
  keyboardEl.innerHTML = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let letter of alphabet) {
    const button = document.createElement("button");
    button.textContent = letter.toUpperCase();
    button.classList.add("key-btn");
    button.addEventListener("click", () => handleGuess(letter, button));
    keyboardEl.appendChild(button);
  }
}

function handleGuess(letter, button) {
  clickSound.play();

  button.disabled = true;
  if (chosenWord.includes(letter)) {
    guessedLetters.push(letter);
    updateWordDisplay();
    checkWin();
  } else {
    triesLeft--;
    triesEl.textContent = triesLeft;
    if (triesLeft === 0) {
      errorSound.play();
      endGame(false);
    }
  }
}

function updateWordDisplay() {
  const display = chosenWord
    .split("")
    .map(letter => (guessedLetters.includes(letter) ? letter.toUpperCase() : "_"))
    .join(" ");
  wordEl.textContent = display;
}

function checkWin() {
  const won = chosenWord.split("").every(letter => guessedLetters.includes(letter));
  if (won) {
    winSound.play();
    winCount++;
    saveHighScore(winCount);  // Sauvegarde le record si supérieur
    endGame(true);
  }
}

function endGame(won) {
  resultEl.textContent = won
    ? `🎉 Bravo, tu as gagné ! Victoires consécutives : ${winCount}`
    : `❌ Perdu... Le mot était : ${chosenWord.toUpperCase()}`;
  restartBtn.classList.remove("hidden");
  [...keyboardEl.children].forEach(btn => (btn.disabled = true));

  if(!won) {
    // Reset compteur de victoires si perdu
    winCount = 0;
  }
}